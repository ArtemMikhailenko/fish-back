// src/products/dto/create-product.dto.ts
import { IsString, IsOptional, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  saleBadge?: string;

  @IsString()
  netWeight: string;


  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  oldPrice?: number;

  @IsOptional()
  @IsString()
  composition?: string;

  @IsOptional()
  @IsString()
  packaging?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  dimension?: string;

  @IsOptional()
  @IsString()
  consistency?: string;

  @IsOptional()
  @IsString()
  shelfLife?: string;

  @IsOptional()
  @IsString()
  image?: string;
}
