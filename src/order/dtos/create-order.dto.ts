import { OrderPayment } from "../enums/order-payment.enum";

export class CreateOrderDto{
      amount: number;
      longitude: number;
      latitude: number;
      clientId: string;
      paymentMethod: OrderPayment;
}