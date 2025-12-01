import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore, provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ordersReducer } from './features/orders/orders.reducer';
import { OrdersEffects } from './features/orders/orders.effects';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { counterReducer } from './shared/store/counter.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideStore(
       { counter: counterReducer }
    ),
    provideState({ name: 'orders', reducer: ordersReducer }),
    provideEffects([OrdersEffects]),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};
