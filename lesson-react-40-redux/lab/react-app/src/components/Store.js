import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import quoteReducer from '../quotes/QuoteReducer'
import todoReducer from '../todos/TodoReducer'

const loggerMiddleware = createLogger()

const store = createStore(
    combineReducers({
      quotes: quoteReducer,
      todos: todoReducer
    }),
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)

export default store;
