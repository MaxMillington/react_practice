'use strict';

var React = require('react');

import './styles.css'

var TodoItem = React.createClass({
    render: function () {
        return (
            <div className="item">
                <a  onClick={this.update}
                    className="update-link"> {this.props.todo.content} </a>
                <a  onClick={this.delete}
                    title="Delete this todo item"
                    className="del-btn">Delete</a>
            </div>
        );
    },
    delete(event) {
      event.preventDefault()
        this.props.delete( this.props.todo.id );
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

var TodoList = module.exports = React.createClass({
    getInitialState() {
        return {
            todos: [
                {id: '1', content: 'First'},
                {id: '2', content: 'Second'}
            ],
            index: 3
        }
    },

    render: function render() {
        var self = this;

        return (
            <div id="layout">
                <h1 id="page-title">Express Todo</h1>
                <div id="list">

                    <TodoInput addTodo={this.addTodo} />

                    {this.state.todos.map( function(todo, idx) {
                        return ( <TodoItem key={idx} todo={todo} delete={self.delete} /> );
                        })}

                </div>
            </div>
        )
    },
    addTodo( content ) {
        var todo = { id: this.state.index++, content: content };
        this.setState( { todos: this.state.todos.concat( todo ) } );

    },
    delete(id) {
        var todos = this.state.todos.filter( function(todo) {
            return todo.id !== id
        });
        this.setState( { todos: todos });
    }
});
