import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductsFacade } from './products.facade';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `
      .feature { display: block; padding: 1rem; }
      .toolbar { display: flex; gap: 0.75rem; align-items: center; margin-bottom: 1rem; }
      .list { list-style: none; padding: 0; }
      .list li { padding: 0.25rem 0; }
      .list li.selected button { font-weight: 600; }
      .list button { background: none; border: none; color: #0066cc; cursor: pointer; text-align: left; }
      .detail { margin-top: 1rem; padding: 0.5rem; border: 1px solid #ddd; }
    `,
  ],
  host: { class: 'products-feature' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  private readonly facade = inject(ProductsFacade);

  readonly products = toSignal(this.facade.products$, { initialValue: [] });
  readonly loading = toSignal(this.facade.loading$, { initialValue: false });
  readonly error = toSignal(this.facade.error$, { initialValue: null });
  readonly selected = toSignal(this.facade.selectedProduct$, { initialValue: null });

  load() { this.facade.loadProducts(); }
  select(id: number) { this.facade.selectProduct(id); }
}
