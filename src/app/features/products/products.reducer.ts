import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product, PRODUCTS_FEATURE_KEY } from './products.models';
import { ProductsActions } from './products.actions';

export interface ProductsState extends EntityState<Product> {
  loading: boolean;
  error: unknown | null;
  selectedId: number | null;
}

export const adapter = createEntityAdapter<Product>({ selectId: (p) => p.id });

export const initialState: ProductsState = adapter.getInitialState({
  loading: false,
  error: null,
  selectedId: null,
});

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.load, (state) => ({ ...state, loading: true, error: null })),
  on(ProductsActions.loadSuccess, (state, { products }) =>
    adapter.setAll(products, { ...state, loading: false })
  ),
  on(ProductsActions.loadFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(ProductsActions.selectById, (state, { id }) => ({ ...state, selectedId: id }))
);

export const { selectAll, selectEntities } = adapter.getSelectors();
