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
import { ApiResponse } from '@nestjs/swagger';
import { UpdateOrderDto } from './dtos/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @ApiResponse({
    status: 200,
    description: 'Get all orders',
    type: [OrderVM],
    isArray: true,
  })
  @Get('/')
  getAllOrders(
    @Query('clientId') clientId?: string,
    @Query('paymentMethod') paymentMethod?: OrderPayment,
  ): OrderVM[] {
    const orders = this.orderService.getAllOrders(clientId, paymentMethod);
    return orders;
  }

  @ApiResponse({ status: 201, type: OrderVM })
  @Post('/')
  @HttpCode(201)
  createOrder(@Body() request: CreateOrderDto): OrderVM {
    const order = this.orderService.createOrder(request);
    return order;
  }

  @ApiResponse({ status: 201, type: OrderVM })
  @ApiResponse({ status: 404, description: 'Order not found' })
  @Put('/:id')
  @HttpCode(201)
  updateOrder(
    @Param('id') id: string,
    @Body() request: UpdateOrderDto,
  ): OrderVM | null {
    const order = this.orderService.updateOrder(id, request);
    if (!order)
      throw new NotFoundException(`Thid id: ${id} not found in orders`);
    return order;
  }

  @ApiResponse({ status: 204, description: 'Order deleted successfully' })
  @ApiResponse({ status: 404, description: 'Order not found' })
  @Delete('/:id')
  @HttpCode(204)
  deleteOrder(@Param('id') id: string): void {
    const isDeleted = this.orderService.deleteOrder(id);
    if (!isDeleted)
      throw new NotFoundException(`Thid id: ${id} not found in orders`);
  }
}
