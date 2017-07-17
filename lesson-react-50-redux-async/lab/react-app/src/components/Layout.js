import React from 'react'
import {Provider} from 'react-redux'

import store from './Store'

export default function Layout(props) {

    return (
        <Provider store={store}>
            <div>
                {props.children}
            </div>
        </Provider>
    )
}
