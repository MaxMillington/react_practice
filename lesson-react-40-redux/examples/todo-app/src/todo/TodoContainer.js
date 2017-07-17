import React from 'react';
import uuid from 'uuid'

import TodoList from './TodoList';
import './Todo.css'

let todos = [
    {
        id: uuid(),
        content: 'first'
    },
    {
        id: uuid(),
        content: 'second'
    },
    {
        id: uuid(),
        content: 'third'
    },
];

export default class TodoContainer extends React.Component {

    constructor(props) {
        super( props );
        this.state = {
            todos: todos
        };
    }

    create = (content) => {
    	todos = todos.concat( {id: uuid(), content})
    	this.setState( {todos})
    }

    remove = (todo) => {
    	todos = todos.filter( item => item.id !== todo.id)
    	this.setState( {todos} )
    }

    render() {
        return (
            <div className='todoContainer'>
				<TodoList todos={this.state.todos}
                    title="TODO List"
					onCreate={this.create}
					onRemove={this.remove}/>
			</div>
        );

    }
}
