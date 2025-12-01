# Learn NgRx Demo

An interview-focused Angular demo showcasing core NgRx concepts with real API calls:

- Store setup with `provideStore`, `provideEffects`, `provideRouterStore`, DevTools
- Feature state registered at root (orders) and route-level (products lazy)
- Entity adapter for normalized collections
- Effects for HTTP fetching with real json-server API
- Facade service pattern for cleaner component interactions
- State composition (products + orders as features)
- Effect strategies: `switchMap` (products) vs `concatMap` (orders for sequential operations)
- Error handling and loading states
- SignalStore for local component state with computed values

## Quick Start

Install dependencies and run the API server and dev server concurrently:

```powershell
npm install
npm run dev
```

This starts:
- json-server on `http://localhost:3000` (mock API with 500ms delay)
- Angular dev server on `http://localhost:4200`

Explore:
- Navigate to `/products` to see NgRx Facade + Effects (switchMap for cancellable requests)
- Navigate to `/orders` to see NgRx Effects (concatMap for sequential order creation)
- Navigate to `/counter` to see Signals + SignalStore

## What To Talk About In Interviews

- Why use NgRx: predictability, testability, tooling, time-travel debugging
- Root state vs feature state; lazy registration at route level vs root-level registration
- Actions → Reducers → Selectors unidirectional flow; purity of reducers (no side effects)
- Entity adapter: normalized shape, efficient CRUD on lists, selector performance
- Effects: `switchMap` (cancellable) vs `concatMap` (sequential); error handling via `catchError`
- Facade service: encapsulates store interaction for testability, shields components from store details
- State composition: combining multiple features (products, orders) in one coherent store
- Signals + SignalStore: local component state, alternative to global store for UI-only state
- Router integration: feature modules, lazy loading, providers scoping
- Dev tools: time travel, action history, performance monitoring

## Build

```powershell
npm run build
```

## Tests

```powershell
npm test
```

## Files of Interest

- `src/app/app.config.ts`: NgRx providers; orders feature registered at root level
- `src/app/app.routes.ts`: Lazy routes; products feature with route-level NgRx registration
- `src/app/features/products/`:
  - `products.models.ts`: Product model
  - `products.actions.ts`: Load, success, failure, select-by-id
  - `products.reducer.ts`: Entity adapter, loading/error/selectedId
  - `products.selectors.ts`: Feature creation; list/loading/error/selected
  - `products.effects.ts`: HTTP GET from json-server using switchMap
  - `products.facade.ts`: **Facade pattern** - encapsulates store dispatch/select
  - `products.component.ts`: Uses facade, injects OrdersActions for demos
- `src/app/features/orders/`:
  - `orders.models.ts`: Order model, create request
  - `orders.actions.ts`: Load, create, success, failure
  - `orders.reducer.ts`: Entity adapter with creating flag
  - `orders.selectors.ts`: Feature creation; list/loading/creating/error
  - `orders.effects.ts`: HTTP GET/POST using concatMap (sequential)
  - `orders.component.ts`: Loads and creates orders via store
- `src/app/features/counter/counter.store.ts`: Pure Angular Signals service (no SignalStore due to API instability)
- `src/app/features/counter/counter.component.ts`: Uses signals with OnPush
- `db.json`: json-server data (products, orders)
- `package.json`: Scripts for `npm run api`, `npm run dev` (concurrently)

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
