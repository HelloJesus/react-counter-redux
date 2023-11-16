export const ADD_COUNTER = 'ADD_COUNTER'
export const REMOVE_COUNTER = 'REMOVE_COUNTER'
export const RESET = 'RESET'

export const ADD_LOADING = 'ADD_LOADING'
export const REMOVE_LOADING = 'REMOVE_LOADING'

export function addCounter(count) {
  return { type: ADD_COUNTER, count }
}

export function removeCounter(count) {
  return { type: REMOVE_COUNTER, count }
}

export function resetCounter() {
  return { type: RESET }
}

function addLoading() {
  return { type: ADD_LOADING }
}

function removeLoading() {
  return { type: REMOVE_LOADING }
}

export const addCounterAsync = (count) => dispatch => {
  dispatch(addLoading())
  new Promise(() => setTimeout(() => {
    dispatch(addCounter(count))
    dispatch(removeLoading())
  }, 1000))
}

export const removeCounterAsync = (count) => dispatch => {
  dispatch(addLoading())
  new Promise(() => setTimeout(() => {
    dispatch(removeCounter(count))
    dispatch(removeLoading())
  }, 1000))
}
