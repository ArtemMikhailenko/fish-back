import {
    Controller,
    Get,
    Post,
    Patch,
    Param,
    Body,
    UsePipes,
    ValidationPipe,
    UseInterceptors,
    UploadedFile,
    BadRequestException,
    Delete,
    NotFoundException,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { ProductsService } from './products.service';
  import { CreateProductDto } from './dto/create-product.dto';
  import { UpdateProductDto } from './dto/update-product.dto';
  import { UploadsService } from '../uploads/uploads.service';
  
  @Controller('products')
  @UsePipes(new ValidationPipe())
  export class ProductsController {
    constructor(
      private readonly productsService: ProductsService,
      private readonly uploadsService: UploadsService, // UploadsService должен быть экспортирован из UploadsModule
    ) {}
  
    @Get()
    findAll() {
      return this.productsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productsService.findOne(id);
    }
  
    // Эндпоинт для создания товара с загрузкой изображения на Cloudinary
    @Post()
    @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
    async createProduct(
      @UploadedFile() file: Express.Multer.File,
      @Body() createProductDto: CreateProductDto,
    ) {
      if (!file) {
        throw new BadRequestException('Файл (file) не загружен');
      }
      // Загружаем файл на Cloudinary через UploadsService
      const uploadResult = await this.uploadsService.uploadToCloudinary(file.path);
      // Присваиваем URL, полученный от Cloudinary, в DTO
      createProductDto.image = uploadResult.url;
      // Создаём товар через ProductsService
      return this.productsService.create(createProductDto);
    }
  
    @Patch(':id')
        @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
        async updateProduct(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
        @Body() updateProductDto: UpdateProductDto,
        ) {
        // Если пользователь передал новый файл
        if (file) {
            const uploadResult = await this.uploadsService.uploadToCloudinary(file.path);
            // Записываем новый URL в DTO
            updateProductDto.image = uploadResult.url;
        }

        // Обновляем остальные поля
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
      const deleted = await this.productsService.remove(id);
      if (!deleted) {
        throw new NotFoundException('Товар не найден');
      }
      return { message: 'Товар удалён' };
    }

  }
  