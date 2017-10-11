
import React from 'react';

import TodoList from './TodoList';
import todoController from './todo-controller'

// TODO: import the todo-store, Dispatcher, and the constants
<<<<<<< HEAD
=======
import TodoStore from './todo-store'
import Dispatcher from '../components/Dispatcher'
import constants from './todo-constants'
>>>>>>> 090065d29f36989c2a0dde5b7ec46d51c6a2089d

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
<<<<<<< HEAD
      // TODO invoke the Dispatcher with an action TODO_FIND_ALL
=======
      TodoStore.registerChangeListener( this._change )
      // TODO invoke the _change() function to load teh store data
      Dispatcher.dispatch( {
        actionType: constants.TODO_FIND_ALL
      })
>>>>>>> 090065d29f36989c2a0dde5b7ec46d51c6a2089d
      // TODO remove the calls to the todoController
    }
    componentWillUnmount() {
      // TODO unregister the callback
      TodoStore.removeChangeListener( this._change )
    }

    _change() {
      this.setState({ todos: TodoStore.getAll() })
      // TODO get the list of todos from the TodoStore
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
      Dispatcher.dispatch( {
        actionType: constants.TODO_CREATE,
        content: content
      })
    }
    remove(id) {
      // TODO remove the calls to the todoController
      // TODO replace with calls to the Dispather.dispatch( an action )
      Dispatcher.dispatch( {
        actionType: constants.TODO_DELETE,
        id: id
      })
    }
    update( todo ) {
      // TODO remove the calls to the todoController
      // TODO replace with calls to the Dispather.dispatch( an action )
      todoController.update( todo, (todos) => {
        this.setState({todos: todos})
      });
    }
}
