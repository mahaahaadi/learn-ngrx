# Learn NgRx Demo

An interview-focused Angular demo showcasing core NgRx concepts:

- Store setup with `provideStore`, `provideEffects`, `provideRouterStore`, DevTools
- Feature state registered at route-level (lazy providers)
- Entity adapter for normalized collections
- Effects for HTTP fetching (mock API)
- Router Store selectors mapping route params to state
- SignalStore for local state with computed values

## Quick Start

Install dependencies and run the dev server:

```powershell
npm install
npm start
```

Open `http://localhost:4200/`:

- Navigate to `/products` to see NgRx Store + Effects + Entity
- Navigate to `/counter` to see Signals + SignalStore

## What To Talk About In Interviews

- Why use NgRx: predictability, testability, tooling, time-travel
- Feature state vs root state, lazy registration via route providers
- Actions → Reducers → Selectors data flow; purity of reducers
- Entity adapter: benefits for lists (ids/entities, efficient updates)
- Effects: handling side effects, error handling, cancellation
- Router Store: derive selections from URL params; keeping state in sync with navigation
- Signals + SignalStore: local state, computed selectors, ergonomics vs global store

## Build

```powershell
npm run build
```

## Tests

```powershell
npm test
```

## Files of Interest

- `src/app/app.config.ts`: NgRx providers (store/effects/router/devtools)
- `src/app/app.routes.ts`: Lazy routes; products feature NgRx registration
- `src/app/features/products/*`: Actions, reducer (entity), selectors, effects, component
- `src/app/features/counter/*`: SignalStore and counter component
- `public/api/products.json`: Mock data consumed by effects

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
