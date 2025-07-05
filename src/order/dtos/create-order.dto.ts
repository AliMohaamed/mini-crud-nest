import { ApiProperty } from '@nestjs/swagger';
import { OrderPayment } from '../enums/order-payment.enum';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsEnum,
  IsLatitude,
  IsLongitude,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ description: 'Order amount', example: 99.99 })
  @IsNotEmpty({ message: 'Amount is required' })
  @IsNumber({}, { message: 'Amount must be a valid number' })
  @IsPositive({ message: 'Amount must be a positive number' })
  amount: number;

  @ApiProperty({ description: 'Longitude coordinate', example: -74.006 })
  @IsNotEmpty({ message: 'Longitude is required' })
  @IsLongitude({ message: 'Longitude must be a valid coordinate' })
  longitude: number;

  @ApiProperty({ description: 'Latitude coordinate', example: 40.7128 })
  @IsNotEmpty({ message: 'Latitude is required' })
  @IsLatitude({ message: 'Latitude must be a valid coordinate' })
  latitude: number;

  @ApiProperty({
    description: 'Client ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsNotEmpty({ message: 'Client ID is required' })
  @IsString({ message: 'Client ID must be a string' })
  @IsUUID('4', { message: 'Client ID must be a valid UUID' })
  clientId: string;

  @ApiProperty({
    enum: OrderPayment,
    description: 'Payment method for the order',
  })
  @IsNotEmpty({ message: 'Payment method is required' })
  @IsEnum(OrderPayment, {
    message: 'Payment method must be a valid enum value',
  })
  paymentMethod: OrderPayment;
}
