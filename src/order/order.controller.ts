import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderVM } from './vms/order.vm';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderPayment } from './enums/order-payment.enum';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('/')
  getAllOrders(
    @Query('clientId') clientId?: string,
    @Query('paymentMethod') paymentMethod?: OrderPayment,
  ): OrderVM[] {
    const orders = this.orderService.getAllOrders(clientId, paymentMethod);
    return orders;
  }

  @Post('/')
  @HttpCode(201)
  createOrder(@Body() request: CreateOrderDto): OrderVM {
    const order = this.orderService.createOrder(request);
    return order;
  }

  @Put('/:id')
  @HttpCode(201)
  updateOrder(
    @Param('id') id: string,
    @Body() request: CreateOrderDto,
  ): OrderVM | null {
    const order = this.orderService.updateOrder(id, request);
    if (!order)
      throw new NotFoundException(`Thid id: ${id} not found in orders`);
    return order;
  }
  @Delete('/:id')
  @HttpCode(200)
  deleteOrder(
    @Param('id') id: string,
  ): void {
    const isDeleted = this.orderService.deleteOrder(id);
    if(!isDeleted) throw new NotFoundException(`Thid id: ${id} not found in orders`);
  }
}
