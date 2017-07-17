import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import './App.css'

import Layout from './components/Layout';
import Home from './components/Home';
import TodoContainer from './todos/TodoContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Route path='/' component={Layout}>
                        <IndexRoute component={Home}/>
                        <Route path='/todos' component={TodoContainer}/>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default App;
