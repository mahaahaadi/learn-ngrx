import { createFeature, createSelector } from '@ngrx/store';
import { ORDERS_FEATURE_KEY } from './orders.models';
import { OrdersState, selectAll, ordersReducer } from './orders.reducer';

export const ordersFeature = createFeature({
  name: ORDERS_FEATURE_KEY,
  reducer: ordersReducer,
});

export const selectOrdersState = ordersFeature.selectOrdersState;
export const selectOrders = createSelector(selectOrdersState, (state) => selectAll(state));
export const selectOrdersLoading = createSelector(selectOrdersState, (state) => state.loading);
export const selectOrdersCreating = createSelector(selectOrdersState, (state) => state.creating);
export const selectOrdersError = createSelector(selectOrdersState, (state) => state.error);
