
import React from 'react'

function TodoItem( props ) {
    function update() {
        props.update( props.todo );
    }
    function remove() {
        props.remove( props.todo.id );
    }
    return (
        <div className="item">
            <a onClick={update}
                title="Update this todo item"
                className="update-link"> {props.todo.content} </a>
            <a onClick={remove}
                title="Delete this todo item"
                className="del-btn">Delete</a>
        </div>
    );
}

function TodoInput( props ) {

    let _input;
    function handleInput( input ) {
        _input = input;
    }

    function submit( event ) {
        event.preventDefault();
        var content = _input.value;
        props.addTodo( content );
        _input.value = '';
    }

    return (
        <form onSubmit={submit}>
            <div className="item-new">
                <input
                    ref={handleInput}
                    type="text"
                    name="content"
                    className="input" />
            </div>
        </form>
    );
}

export default function TodoList( props ) {
        return (
            <div id="layout">
                <h1 id="page-title">Express Todo</h1>
                <div id="list">

                    <TodoInput addTodo={props.addTodo} />

                    {props.todos.map( function( todo, idx ) {
                        return (
                            <TodoItem
                                key={idx}
                                todo={todo}
                                update={props.update}
                                remove={props.remove} /> );
                        })}
                </div>
            </div>
        )
}
