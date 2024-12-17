import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop()
  image: string;

  @Prop()
  category: string;

  @Prop({ default: false })
  inCart: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
