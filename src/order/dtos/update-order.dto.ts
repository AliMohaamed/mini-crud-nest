import { ApiProperty } from '@nestjs/swagger';
import { OrderPayment } from '../enums/order-payment.enum';
import {
  IsNumber,
  IsPositive,
  IsEnum,
  IsLatitude,
  IsLongitude,
  IsOptional,
} from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty({ description: 'Order amount', example: 99.99 })
  @IsOptional()
  @IsNumber({}, { message: 'Amount must be a valid number' })
  @IsPositive({ message: 'Amount must be a positive number' })
  amount?: number;

  @ApiProperty({ description: 'Longitude coordinate', example: -74.006 })
  @IsOptional()
  @IsLongitude({ message: 'Longitude must be a valid coordinate' })
  longitude?: number;

  @ApiProperty({ description: 'Latitude coordinate', example: 40.7128 })
  @IsOptional()
  @IsLatitude({ message: 'Latitude must be a valid coordinate' })
  latitude?: number;

  @ApiProperty({
    enum: OrderPayment,
    description: 'Payment method for the order',
  })
  @IsOptional()
  @IsEnum(OrderPayment, {
    message: 'Payment method must be a valid enum value',
  })
  paymentMethod?: OrderPayment;
}
