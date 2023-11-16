import { ADD_COUNTER, REMOVE_COUNTER, RESET, ADD_LOADING, REMOVE_LOADING } from "./counterAction"

export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_COUNTER:
            return state + action.count

        case REMOVE_COUNTER:
            return state - action.count

        case RESET:
            return state = 0
        default:
            return state
    }
}

export function statusCounter(state = { isLoading: false }, action) {
    switch (action.type) {
        case ADD_LOADING:
            return { ...state, isLoading: true }

        case REMOVE_LOADING:
            return { ...state, isLoading: false }
        default:
            return state
    }
}