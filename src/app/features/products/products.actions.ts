import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from './products.models';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Load': emptyProps(),
    'Load Success': props<{ products: Product[] }>(),
    'Load Failure': props<{ error: unknown }>(),
    'Select By Id': props<{ id: number | null }>(),
  },
});
