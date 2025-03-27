// src/products/product.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop()
  saleBadge?: string;

  @Prop({ required: true })
  netWeight: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  oldPrice?: number;

  @Prop()
  composition?: string;

  @Prop()
  packaging?: string;

  @Prop()
  color?: string;

  @Prop()
  dimension?: string;

  @Prop()
  consistency?: string;

  @Prop()
  shelfLife?: string;

  @Prop()
  image?: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
