// admin.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  passwordHash: string;

  // Хранить исходный пароль (НЕБЕЗОПАСНО!)
  @Prop()
  rawPassword?: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
