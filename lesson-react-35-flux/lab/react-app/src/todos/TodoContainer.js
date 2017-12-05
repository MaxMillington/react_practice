import React from 'react';

import TodoList from './TodoList';
import TodoStore from './todo-store';
import Dispatcher from '../components/Dispatcher';
import actions from './todo-actions'

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this._change = this._change.bind(this)
  }

  componentDidMount() {
    TodoStore.registerChangeListener(this._change);
    Dispatcher.dispatch(actions.findAll());
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._change);
  }

  _change() {
    this.setState({todos: TodoStore.getAll()});
  }

  render() {
    return (<TodoList todos={this.state.todos} addTodo={this.addTodo} remove={this.remove} update={this.update}/>)
  }

  addTodo(content) {
    Dispatcher.dispatch(actions.create(content));
  }
  remove(id) {
    Dispatcher.dispatch(actions.remove(id));
  }
  update(todo) {
    Dispatcher.dispatch(actions.update(todo));
  }

}
