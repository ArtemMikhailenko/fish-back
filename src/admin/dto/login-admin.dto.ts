// src/admin/dto/login-admin.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginAdminDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
