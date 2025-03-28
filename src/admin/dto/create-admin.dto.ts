// src/admin/dto/create-admin.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
