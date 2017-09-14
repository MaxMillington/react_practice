
var React = require('react');

import './styles.css'
import delButton from './delete.png'

var controller = require('./todo-controller.js');

var TodoItem = React.createClass({
    render: function () {
        return (
            <div className="item">
                <a onClick={this.update}
                    title="Update this todo item"
                    className="update-link"> {this.props.todo.content} </a>
                  <a onClick={this.remove}
                    title="Delete this todo item"
                    style={{float: "right"}}
                    >
                    <img src={delButton} alt="Delete" /></a>
            </div>
        );
    },
    update(event) {
      event.preventDefault()
      //this.props.update( this.props.todo )
    },
    remove(event) {
      event.preventDefault()
      this.props.remove(this.props.todo)
    }

});

var TodoInput = React.createClass({
    render: function () {
        return (
            <form onSubmit={this.submit}>
                <div className="item-new">
                    <input type="text" name="content" className="input"/>
                </div>
            </form>
        );
    },
    submit( event ) {
        event.preventDefault();
        var content = event.target.elements[0].value;
        event.target.elements[0].value = '';
        this.props.addTodo( content );
    }
});

var TodoList = React.createClass({
    getInitialState() {
        return {
            todos: []
        }
    },

    componentDidMount() {
        controller.findAll( this.done );
    },

    done: function( todos ) {
        this.setState( { todos: todos });
    },

    render: function render() {

        return (
            <div id="layout">
                <h1 id="page-title">Express Todo</h1>
                <div id="list">

                    <TodoInput addTodo={this.addTodo} />

                    {this.state.todos.map( (todo, idx) => {
                        return ( <TodoItem key={idx} todo={todo} remove={this.remove} /> );
                        })}

                </div>
            </div>
        )
    },
    addTodo( content ) {
        controller.create( content, this.done );
    },
    remove(todo) {
        controller.remove( todo.id, this.done );
    }
});

module.exports = TodoList
