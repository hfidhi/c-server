import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../schema/product.schemas';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) 
    private readonly productModel: Model<Product>,
  ) {}

  // Create Product
  async create(product: any): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  // Get All Products
  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  // Get Product by ID
  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  // Update Product
  async update(id: string, updatedProduct: any): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    }).exec();
  }

  // Delete Product
  async remove(id: string): Promise<boolean> {
    const result = await this.productModel.findByIdAndDelete(id).exec();
    return result ? true : false;
  }

  // Add Product to Cart
  async addToCart(id: string): Promise<Product> {
    return this.productModel.findByIdAndUpdate(
      id,
      { inCart: true },
      { new: true },
    ).exec();
  }
}
