import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductsService } from '../service/product.service';
import { CreateProductDto } from '../dto/creat.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Get all products
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // Get a single product by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      return { message: 'Product not found' };
    }
    return product;
  }

  // Create a new product
  @Post()
  @HttpCode(HttpStatus.CREATED) // This explicitly sets the response status to 201
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  // Update a product
  @Put(':id')
  update(@Param('id') id: string, @Body() updatedProduct: any) {
    return this.productsService.update(id, updatedProduct);
  }

  // Delete a product
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  // Add product to cart
  @Put(':id/cart')
  addToCart(@Param('id') id: string) {
    return this.productsService.addToCart(id);
  }
}
