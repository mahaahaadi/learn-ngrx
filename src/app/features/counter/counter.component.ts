import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter',
  template: `
    <!-- <section class="feature">
      <h2>Counter (SignalStore)</h2>
      <p>Current: {{ store.count() }}</p>
      <p>Double: {{ store.doubled() }}</p>

      <div class="actions">
        <button type="button" (click)="store.decrement()">-1</button>
        <button type="button" (click)="store.increment()">+1</button>
        <button type="button" (click)="store.incrementBy(5)">+5</button>
        <button type="button" (click)="store.reset()">Reset</button>
      </div>
    </section> -->
  `,
  styles: [
    `
      // .feature { display: block; padding: 1rem; }
      // .actions { display: flex; gap: 0.5rem; }
      // button { padding: 0.5rem 0.75rem; }
    `,
  ],
  host: {
    class: 'counter-feature'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  // readonly store = inject(CounterStore);
}
