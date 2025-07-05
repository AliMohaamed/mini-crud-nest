import { ApiProperty } from '@nestjs/swagger';
import { OrderPayment } from '../enums/order-payment.enum';

export class OrderVM {
  @ApiProperty()
  id: string;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  longitude: number;
  @ApiProperty()
  latitude: number;
  @ApiProperty()
  clientId: string;
  @ApiProperty()
  paymentMethod: OrderPayment;

  constructor(
    id: string,
    amount: number,
    longitude: number,
    latitude: number,
    clientId: string,
    paymentMethod: OrderPayment,
  ) {
    this.id = id;
    this.amount = amount;
    this.longitude = longitude;
    this.latitude = latitude;
    this.clientId = clientId;
    this.paymentMethod = paymentMethod;
  }
}
