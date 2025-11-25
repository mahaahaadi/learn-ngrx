import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsActions } from './products.actions';
import * as ProductsSelectors from './products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `
      .feature { display: block; padding: 1rem; }
      .toolbar { display: flex; gap: 0.75rem; align-items: center; }
      .list { list-style: none; padding: 0; }
      .list li { padding: 0.25rem 0; }
      .list li.selected a { font-weight: 600; }
      .detail { margin-top: 1rem; padding: 0.5rem; border: 1px solid #ddd; }
    `,
  ],
  host: {
    class: 'products-feature'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  private readonly store = inject(Store);

  readonly products = this.store.selectSignal(ProductsSelectors.selectProducts);
  readonly loading = this.store.selectSignal(ProductsSelectors.selectLoading);
  readonly selectedId = this.store.selectSignal(ProductsSelectors.selectSelectedId);
  readonly selected = this.store.selectSignal(ProductsSelectors.selectSelectedProduct);

  readonly hasProducts = computed(() => (this.products() ?? []).length > 0);

  load() { this.store.dispatch(ProductsActions.load()); }
  select(id: number) { this.store.dispatch(ProductsActions.selectById({ id })); }
}
