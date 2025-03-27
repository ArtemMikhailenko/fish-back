// seed-admin.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { AdminService } from '../src/admin/admin.service';
import { CreateAdminDto } from '../src/admin/dto/create-admin.dto';

async function bootstrap() {
  // Создаём приложение в режиме контекста (без запуска HTTP-сервера)
  const appContext = await NestFactory.createApplicationContext(AppModule);
  
  // Получаем сервис администраторов
  const adminService = appContext.get(AdminService);
  
  // Задаём данные для создания администратора
  const createAdminDto: CreateAdminDto = {
    username: 'superadmin',
    password: '12345',
  };
  
  try {
    const newAdmin = await adminService.createAdmin(createAdminDto);
    console.log('Администратор создан:', newAdmin);
  } catch (error) {
    console.error('Ошибка при создании администратора:', error);
  } finally {
    // Завершаем приложение
    await appContext.close();
    process.exit(0);
  }
}

bootstrap();
