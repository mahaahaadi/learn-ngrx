import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsActions } from './products.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Product } from './products.models';

@Injectable({ providedIn: 'root' })
export class ProductsEffects {
  private readonly actions$ = inject(Actions);
  private readonly http = inject(HttpClient);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.load),
      switchMap(() =>
        this.http.get<Product[]>('http://localhost:3000/products').pipe(
          map((products) => ProductsActions.loadSuccess({ products })),
          catchError((error) => of(ProductsActions.loadFailure({ error })))
        )
      )
    )
  );

}
