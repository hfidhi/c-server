import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './Products/product.module';
import { ProductsService } from './Products/service/product.service';
import { Product, ProductSchema } from './Products/schema/product.schemas';
import { ProductsController } from './Products/controller/product.controllers';
import {ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    MongooseModule.forRoot('mongodb://localhost:27017/hackthons'), // Replace with your local MongoDB URI
    ProductsModule,
    MongooseModule.forFeature([
      {name:Product.name,schema:ProductSchema}
    ])
  ],
  controllers:[ProductsController],
  providers:[ProductsService]
})
export class AppModule {}
