import React, {Component} from 'react'

import TodoList from './TodoList'

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: '1',  content: 'First'},
        { id: '2', content: 'Second'}
      ],
      index: 3
    }
  }
  render() {
    return (
      <TodoList
        todos={this.state.todos}
        addTodo={this.addTodo}
        remove={this.remove}
        update={this.update}></TodoList>
    )
  }

  addTodo = (content) => {
    var todo = {
      id: this.state.index++,
      content: content
    };
    this.setState({todos: this.state.todos.concat(todo)});
  }

  remove = (id) => {
    var todos = this.state.todos.filter(function(todo) {
      return todo.id !== id
    });
    this.setState({todos: todos});
  }

  update = (todo) => {
    var todos = this.state.todos.map(function(item) {
      if (item.id === todo.id) {
        item.content = todo.content;
      }
      return item;
    });
    this.setState({todos: todos});
  }

}
