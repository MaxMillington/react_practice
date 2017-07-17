import React from 'react'

import TodoContainer from '../todos/TodoContainer';
import Status from './Status';

import './styles.css'

export default function Home( props ) {

    return (
        <div id='home'>
            <h1>This is the home page</h1>
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
