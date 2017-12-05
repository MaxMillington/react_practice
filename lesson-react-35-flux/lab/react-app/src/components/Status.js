import React, {Component} from 'react'

var TodoStore = require('../todos/todo-store');

export default class Status extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      number: 1
    }
    this._change = this._change.bind(this)
    this.getCountMessage = this.getCountMessage.bind(this)
  }

  componentDidMount() {
    TodoStore.registerChangeListener(this._change);
    this._change();
  }

  _change() {
    this.setState( { number: TodoStore.getAll().length } );
  }

  getCountMessage() {
    switch (this.state.number) {
      case 0: return 'There is nothing to TODO. Enter one?';
      case 1: return 'There is 1 TODO.';
      default: return 'There are ' + this.state.number + ' TODOs';
    }
  }

  render() {
    return (
      <div id='status'>
        <h1>This is the status page</h1>
        <h1>{this.getCountMessage()}</h1>
      </div>
    );
  }
}
