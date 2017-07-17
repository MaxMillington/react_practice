import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import nameReducer from './name/reducer'

const loggerMiddleware = createLogger()

const store = createStore(
    nameReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)

ReactDOM.render(
  <Provider store={ store } >
    <App / >
    </Provider>,
    document.getElementById('root')
);