import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsActions } from './products.actions';
import * as ProductsSelectors from './products.selectors';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  private readonly store = inject(Store);

  readonly products$ = this.store.select(ProductsSelectors.selectProducts);
  readonly loading$ = this.store.select(ProductsSelectors.selectLoading);
  readonly error$ = this.store.select(ProductsSelectors.selectError);
  readonly selectedProduct$ = this.store.select(ProductsSelectors.selectSelectedProduct);

  loadProducts() {
    this.store.dispatch(ProductsActions.load());
  }

  selectProduct(id: number | null) {
    this.store.dispatch(ProductsActions.selectById({ id }));
  }
}
