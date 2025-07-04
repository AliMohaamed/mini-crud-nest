import { OrderPayment } from "../enums/order-payment.enum";

export class UpdateOrderDto{
      amount: number;
      longitude: number;
      latitude: number;
      paymentMethod: OrderPayment;
}