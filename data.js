import { v4 as uuid } from 'uuid';

export const dataOrders = [
  {
    id: uuid(),
    amount: 1230.5,
    longitude: 23.21,
    latitude: 31.01,
    clientId: 1,
    paymentMethod: 'Cash',
  },
  {
    id: uuid(),
    amount: 450.0,
    longitude: 24.15,
    latitude: 30.98,
    clientId: 2,
    paymentMethod: 'Visa',
  },
  {
    id: uuid(),
    amount: 999.99,
    longitude: 25.1,
    latitude: 29.88,
    clientId: 3,
    paymentMethod: 'Cash',
  },
  {
    id: uuid(),
    amount: 2750.75,
    longitude: 26.05,
    latitude: 28.75,
    clientId: 4,
    paymentMethod: 'Visa',
  },
];
