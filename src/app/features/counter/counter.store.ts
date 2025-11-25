import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterStore {
  private readonly _count = signal(0);
  readonly count = computed(() => this._count());
  readonly doubled = computed(() => this._count() * 2);

  increment() { this._count.update(c => c + 1); }
  decrement() { this._count.update(c => c - 1); }
  reset() { this._count.set(0); }
  incrementBy(amount: number) { this._count.update(c => c + amount); }
}
