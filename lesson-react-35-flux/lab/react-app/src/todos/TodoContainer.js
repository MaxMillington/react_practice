
import React from 'react';

import TodoList from './TodoList';
import todoController from './todo-controller'

// TODO: import the todo-store and Dispatcher

export default class TodoContainer extends React.Component {
    constructor( props ) {
      super(props)
      this.state = {
        todos: []
      }
      this.addTodo = this.addTodo.bind(this)
      this.remove = this.remove.bind(this)
      this.update = this.update.bind(this)
      this._change = this._change.bind(this)
    }

    componentDidMount() {
      // TODO register the change listener with the TodoStore
      // TODO invoke the _change() function to load teh store data
      // TODO remove the calls to the todoController
      todoController.findAll( (todos) => {
        this.setState({todos: todos})
      });
    }
    componentWillUnmount() {
      // TODO unregister the callback
    }

    _change() {
      // TODO get the list of todos from the TodoStore
      // TODO set the state variable, number, to the number of todos items
    }
    render() {
        return (
            <TodoList
              todos={this.state.todos}
              addTodo={this.addTodo}
              remove={this.remove}
              update={this.update} />
        )
    }
    addTodo( content ) {
      // TODO remove the calls to the todoController
      // TODO replace with calls to the Dispather.dispatch( an action )
      todoController.create( content, (todos) => {
        this.setState({todos: todos})
      });
    }
    remove(id) {
      // TODO remove the calls to the todoController
      // TODO replace with calls to the Dispather.dispatch( an action )
      todoController.delete( id, (todos) => {
        this.setState({todos: todos})
      });
    }
    update( todo ) {
      // TODO remove the calls to the todoController
      // TODO replace with calls to the Dispather.dispatch( an action )
      todoController.update( todo, (todos) => {
        this.setState({todos: todos})
      });
    }
}
