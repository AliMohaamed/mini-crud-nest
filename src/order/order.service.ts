import { Injectable } from '@nestjs/common';
import { OrderVM } from './vms/order.vm';
import { dataOrders } from '../../data.js';
import { CreateOrderDto } from './dtos/create-order.dto';
import { Order } from './entities/order.model';
import { v4 as uuid } from 'uuid';
import { UpdateOrderDto } from './dtos/update-order.dto';
import { OrderPayment } from './enums/order-payment.enum';
@Injectable()
export class OrderService {
  getAllOrders(clientId?: string, paymentMethod?: OrderPayment): OrderVM[] {
    let filteredOrders = dataOrders;

    // Filter by clientId if provided
    if (clientId) {
      filteredOrders = filteredOrders.filter(
        (order) => order.clientId === clientId,
      );
    }

    // Filter by paymentMethod if provided
    if (paymentMethod) {
      filteredOrders = filteredOrders.filter(
        (order) => order.paymentMethod === paymentMethod,
      );
    }

    return filteredOrders.map(
      (order) =>
        new OrderVM(
          order.id,
          order.amount,
          order.longitude,
          order.latitude,
          order.clientId,
          order.paymentMethod,
        ),
    );
  }

  // Create order
  createOrder(createOrderDto: CreateOrderDto): OrderVM {
    const order: Order = {
      id: uuid(),
      amount: createOrderDto.amount,
      longitude: createOrderDto.longitude,
      latitude: createOrderDto.latitude,
      clientId: createOrderDto.clientId,
      paymentMethod: createOrderDto.paymentMethod,
    };
    dataOrders.push(order);
    return new OrderVM(
      order.id,
      order.amount,
      order.longitude,
      order.latitude,
      order.clientId,
      order.paymentMethod,
    );
  }

  // update order
  updateOrder(id: string, updateOrderDto: UpdateOrderDto): OrderVM | null {
    console.log(
      dataOrders.find((o) => {
        console.log(o);
        return o.id === id;
      }),
    );
    const order = dataOrders.find((o) => o.id === id) ?? null;
    if (!order) return null;

    order.amount = updateOrderDto.amount;
    order.longitude = updateOrderDto.longitude;
    order.latitude = updateOrderDto.latitude;
    order.paymentMethod = updateOrderDto.paymentMethod;

    return new OrderVM(
      order.id,
      order.amount,
      order.longitude,
      order.latitude,
      order.clientId,
      order.paymentMethod,
    );
  }

  // delete order
  deleteOrder(id: string): boolean {
    const index = dataOrders.findIndex((order) => order.id === id);
    const deleted = index !== -1;

    if (deleted) {
      dataOrders.splice(index, 1);
    }

    return deleted;
  }
}
