import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Order, ORDERS_FEATURE_KEY } from './orders.models';
import { OrdersActions } from './orders.actions';

export interface OrdersState extends EntityState<Order> {
  loading: boolean;
  creating: boolean;
  error: unknown | null;
}

export const adapter = createEntityAdapter<Order>({ selectId: (o) => o.id });

export const initialState: OrdersState = adapter.getInitialState({
  loading: false,
  creating: false,
  error: null,
});

export const ordersReducer = createReducer(
  initialState,
  on(OrdersActions.load, (state) => ({ ...state, loading: true, error: null })),
  on(OrdersActions.loadSuccess, (state, { orders }) =>
    adapter.setAll(orders, { ...state, loading: false })
  ),
  on(OrdersActions.loadFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(OrdersActions.create, (state) => ({ ...state, creating: true, error: null })),
  on(OrdersActions.createSuccess, (state, { order }) =>
    adapter.addOne(order, { ...state, creating: false })
  ),
  on(OrdersActions.createFailure, (state, { error }) => ({ ...state, creating: false, error }))
);

export const { selectAll, selectEntities } = adapter.getSelectors();
