import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { counter, statusCounter } from './counterReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    counter,
    statusCounter
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
