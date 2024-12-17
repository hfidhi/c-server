import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  readonly image: string; // URL or base64 encoded image

  @IsString()
  @IsNotEmpty()
  readonly category: string; // Add category field

  @IsString()
  @IsNotEmpty()
  readonly addToCart: string; // Add addToCart field
}
