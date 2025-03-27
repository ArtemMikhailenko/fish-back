import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    BadRequestException,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { UploadsService } from './uploads.service';
  import { UploadResponseDto } from './dto/upload-response.dto';
  
  @Controller('uploads')
  export class UploadsController {
    constructor(private readonly uploadsService: UploadsService) {}
  
    @Post('image')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile() file: Express.Multer.File): Promise<UploadResponseDto> {
      if (!file) {
        throw new BadRequestException('No file provided');
      }
  
      const result = await this.uploadsService.uploadToCloudinary(file.path);
      return result;
    }
  }
  