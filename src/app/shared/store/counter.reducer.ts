import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

const _counterReducer = createReducer(initialState, 
    on(increment, (state) => {
        return{
            ...state,
            counter: state.counter + 1
        }
    },
    ),

    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),

    on(reset, (state) => {
        return {
            ...state,
            counter: state.counter = 0
        }
    }) 

)

export function coounterReducer(state: any, action: any) {

}