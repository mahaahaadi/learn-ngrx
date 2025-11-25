import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productsReducer } from './features/products/products.reducer';
import { ProductsEffects } from './features/products/products.effects';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'products'
	},
	{
		path: 'counter',
		loadComponent: () => import('./features/counter/counter.component').then(m => m.CounterComponent),
	},
	{
		path: 'products',
		loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent),
		providers: [
			// Route-level feature registration; instantiated when route is active
			provideState({ name: 'products', reducer: productsReducer }),
			provideEffects([ProductsEffects]),
		]
	},
];
