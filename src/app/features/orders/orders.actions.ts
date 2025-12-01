import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Order, CreateOrderRequest } from './orders.models';

export const OrdersActions = createActionGroup({
  source: 'Orders',
  events: {
    'Load': emptyProps(),
    'Load Success': props<{ orders: Order[] }>(),
    'Load Failure': props<{ error: unknown }>(),
    'Create': props<{ request: CreateOrderRequest }>(),
    'Create Success': props<{ order: Order }>(),
    'Create Failure': props<{ error: unknown }>(),
  },
});
