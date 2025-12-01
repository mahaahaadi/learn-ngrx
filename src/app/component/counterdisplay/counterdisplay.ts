import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counterdisplay',
  imports: [AsyncPipe],
  templateUrl: './counterdisplay.html',
  styleUrl: './counterdisplay.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counterdisplay {

  private store = inject(Store);
  counterDisplay = this.store.select((state: any) => state.counter.counter);
}
