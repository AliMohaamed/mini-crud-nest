import { OrderPayment } from '../enums/order-payment.enum';

export interface Order {
  id: string;
  amount: number;
  longitude: number;
  latitude: number;
  clientId: string;
  paymentMethod: OrderPayment;
}
