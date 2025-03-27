// src/admin/admin.controller.ts
import {
    Controller,
    Post,
    Body,
    Get,
    UsePipes,
    ValidationPipe,
    Delete,
    Param,
    NotFoundException,
  } from '@nestjs/common';
  import { AdminService } from './admin.service';
  import { CreateAdminDto } from './dto/create-admin.dto';
  import { LoginAdminDto } from './dto/login-admin.dto';
  
  @Controller('admin')
  @UsePipes(new ValidationPipe())
  export class AdminController {
    constructor(private readonly adminService: AdminService) {}
  
    @Post('create')
    async createAdmin(@Body() dto: CreateAdminDto) {
      return this.adminService.createAdmin(dto);
    }
  
    @Post('login')
    async loginAdmin(@Body() dto: LoginAdminDto) {
      const token = await this.adminService.loginAdmin(dto);
      return { token };
    }
  
    @Get('all')
    async getAllAdmins() {
      return this.adminService.getAllAdmins();
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
    const deleted = await this.adminService.remove(id);
    if (!deleted) {
      throw new NotFoundException('Администратор не найден');
    }
    return { message: 'Администратор удалён' };
  }
  }
  