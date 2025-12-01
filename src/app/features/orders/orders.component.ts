import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrdersActions } from './orders.actions';
import * as OrdersSelectors from './orders.selectors';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [
    `
      .feature { display: block; padding: 1rem; }
      .toolbar { display: flex; gap: 0.75rem; margin-bottom: 1rem; }
      .list { list-style: none; padding: 0; }
      .list li { padding: 0.5rem; border-bottom: 1px solid #eee; }
      .status-pending { color: orange; font-weight: 600; }
      .status-delivered { color: green; font-weight: 600; }
      .status-failed { color: red; font-weight: 600; }
      .error { color: red; }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {
  private readonly store = inject(Store);

  readonly orders = this.store.selectSignal(OrdersSelectors.selectOrders);
  readonly loading = this.store.selectSignal(OrdersSelectors.selectOrdersLoading);
  readonly creating = this.store.selectSignal(OrdersSelectors.selectOrdersCreating);
  readonly error = this.store.selectSignal(OrdersSelectors.selectOrdersError);

  loadOrders() {
    this.store.dispatch(OrdersActions.load());
  }

  createOrder() {
    this.store.dispatch(OrdersActions.create({
      request: { productId: 1, quantity: 1 }
    }));
  }
}
