import React from 'react'

import TodoContainer from '../todos/TodoContainer';
// TODO change the Status variable to StatusContainer, also change it below
import Status from './Status';

import QuoteContainer from '../quotes/QuoteContainer'
import './styles.css'

export default function Home( props ) {

    return (
        <div id='home'>
            <h1>This is the home page</h1>
            <QuoteContainer></QuoteContainer>
            <div>
                <div className="half">
                    <Status />
                </div>

                <div className="half">
                    <TodoContainer />
                </div>
            </div>
        </div>
    );
}
