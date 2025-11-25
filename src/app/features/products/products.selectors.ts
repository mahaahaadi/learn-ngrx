import { createFeature, createSelector } from '@ngrx/store';
import { PRODUCTS_FEATURE_KEY } from './products.models';
import { ProductsState, selectAll, productsReducer } from './products.reducer';

export const productsFeature = createFeature({
  name: PRODUCTS_FEATURE_KEY,
  reducer: productsReducer,
});

export const selectProductsState = productsFeature.selectProductsState;

export const selectProducts = createSelector(selectProductsState, (state) => selectAll(state));
export const selectLoading = createSelector(selectProductsState, (state) => state.loading);
export const selectSelectedId = createSelector(selectProductsState, (state) => state.selectedId);
export const selectError = createSelector(selectProductsState, (state) => state.error);

export const selectSelectedProduct = createSelector(
  selectProductsState,
  (state) => state.selectedId != null ? (state.entities as Record<number, any>)[state.selectedId] ?? null : null
);
