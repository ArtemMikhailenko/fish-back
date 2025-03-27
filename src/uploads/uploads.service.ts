import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class UploadsService {
  constructor(private configService: ConfigService) {
    const cloudName = this.configService.get('CLOUDINARY_CLOUD_NAME');
    const apiKey = this.configService.get('CLOUDINARY_API_KEY');
    const apiSecret = this.configService.get('CLOUDINARY_API_SECRET');

    console.log('Cloudinary Config:', {
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret ? '****' : undefined
    });

    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });
  }

  async uploadToCloudinary(filePath: string): Promise<{ url: string; public_id: string }> {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'public/images',
        resource_type: 'image',
        use_filename: true,
        unique_filename: false,
      });

      return {
        url: result.secure_url,
        public_id: result.public_id,
      };
    } catch (error) {
      console.error('Ошибка при загрузке в Cloudinary:', error);
      throw error;
    }
  }
}