import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdersActions } from './orders.actions';
import { concatMap, map, catchError, of } from 'rxjs';
import { Order, CreateOrderRequest } from './orders.models';

@Injectable({ providedIn: 'root' })
export class OrdersEffects {
  private readonly actions$ = inject(Actions);
  private readonly http = inject(HttpClient);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.load),
      concatMap(() =>
        this.http.get<Order[]>('http://localhost:3000/orders').pipe(
          map((orders) => OrdersActions.loadSuccess({ orders })),
          catchError((error) => of(OrdersActions.loadFailure({ error })))
        )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.create),
      concatMap(({ request }) =>
        this.http.post<Order>('http://localhost:3000/orders', {
          ...request,
          status: 'pending',
          createdAt: new Date().toISOString(),
        }).pipe(
          map((order) => OrdersActions.createSuccess({ order })),
          catchError((error) => of(OrdersActions.createFailure({ error })))
        )
      )
    )
  );
}
