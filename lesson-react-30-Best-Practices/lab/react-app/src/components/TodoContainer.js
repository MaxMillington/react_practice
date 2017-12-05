
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import TodoList from './TodoList'

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: '1', content: 'First'},
        {id: '2', content: 'Second'}
      ],
      index: 3
    }
  }

  addTodo = ( content ) => {
    var todo = { id: this.state.index++, content: content };
    this.setState( { todos: this.state.todos.concat( todo ) } );

  }

  delete = (id) => {
    var todos = this.state.todos.filter( function(todo) {
      return todo.id !== id
    });
    this.setState( { todos: todos });
  }
  
  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          index={this.props.index}
          addTodo={this.addTodo}
          delete={this.delete}
        />
      </div>
    )
  }
}
