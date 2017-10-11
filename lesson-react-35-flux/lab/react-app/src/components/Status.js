import React, {Component} from 'react'

// TODO import the TodoStore from ../todos/todo-store
import TodoStore from '../todos/todo-store'

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
      // TODO register the change listener on the TodoStore
      // TODO call _change() to load the listener
      TodoStore.registerChangeListener( this._change )
      this._change()
    }
    componentWillUnmount() {
      TodoStore.removeChangeListener( this._change )
      // TODO unregister the callback
    }

    _change( todos ) {
      this.setState( {number: todos.length })
      // TODO get the number of todo items form the TodoStore
      // TODO set the state variable, number, to the length of the todos
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
