import React from 'react'
import {Provider} from 'react-redux'

import store from './Store'
import QuoteOfTheDay from '../quotes/QuoteOfTheDay'

export default function Layout(props) {

    return (
        <Provider store={store}>
          <div>
          <QuoteOfTheDay></QuoteOfTheDay>
            <div>
                {props.children}
            </div>            
          </div>
        </Provider>
    )
}
