import { createAction } from "@ngrx/store"

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");

// const increment = '[Counter] Increment';
// const decrement = '[Counter] Decrement';
// const reset = '[Counter] Reset';
// const incrementBy = '[Counter] Increment By';

// export { increment, decrement, reset, incrementBy };