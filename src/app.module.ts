// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [
    // Замените <username>, <password>, <cluster-url>, <databaseName> на свои реальные данные
    MongooseModule.forRoot(
      'mongodb+srv://fish:fish@cluster0.sfqvbnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),    AdminModule,
    ProductsModule,
    UploadsModule
  ],
})
export class AppModule {}
