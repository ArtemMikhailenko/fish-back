// src/admin/admin.service.ts
import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './admin.schema';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
  ) {}

  // Создание нового админа
// admin.service.ts (фрагмент createAdmin)
async createAdmin(dto: CreateAdminDto): Promise<{ id: string; username: string; rawPassword?: string; }> {
    const exists = await this.adminModel.findOne({ username: dto.username });
    if (exists) {
      throw new ConflictException('Admin with this username already exists');
    }
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(dto.password, salt);
  
    const newAdmin = new this.adminModel({
      username: dto.username,
      passwordHash: hash,
      rawPassword: dto.password, // <-- сохраняем исходный пароль
    });
  
    const saved = await newAdmin.save();
  
    return {
      id: saved._id.toString(),
      username: saved.username,
      rawPassword: saved.rawPassword, // возвращаем тоже, если нужно
    };
  }
  

  // Логин админа
  async loginAdmin(dto: LoginAdminDto): Promise<string> {
    // Ищем админа по username
    const admin = await this.adminModel.findOne({ username: dto.username });
    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Проверяем пароль
    const isMatch = await bcrypt.compare(dto.password, admin.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Если всё ок, возвращаем «токен»
    return 'fake-jwt-token';
  }

  // Получить всех админов (без пароля) - опционально
  // admin.service.ts (фрагмент getAllAdmins)
async getAllAdmins(): Promise<Array<{ id: string; username: string; password: string }>> {
    const admins = await this.adminModel.find().exec();
    return admins.map((adm) => ({
      id: adm._id.toString(),
      username: adm.username,
      // берем поле rawPassword (если нет - пустая строка)
      password: adm.rawPassword ?? '',
    }));
  }
  async remove(id: string): Promise<Admin | null> {
    return this.adminModel.findByIdAndDelete(id).exec();
  }
}
