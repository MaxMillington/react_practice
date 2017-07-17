import React from 'react'
import PropTypes from 'prop-types'
import {injectIntl, FormattedDate, FormattedMessage} from 'react-intl'


import './styles.css'

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

TodoItem.prototype.propTypes = {
  todo: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  remove : PropTypes.func.isRequired
}

function TodoInput( props ) {

    let _input;
    function handleInput( input ) {
        _input = input;
    }

    function submit( event ) {
        event.preventDefault();
        const content = _input.value;
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

TodoInput.prototype.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const PostDate = injectIntl(({date, intl}) => (
    <span title={intl.formatDate(date)}>
        <FormattedDate value={date}/>
    </span>
));


export default function TodoList( {todos, update, remove, addTodo} ) {
        return (
            <div id="layout">
                <h1 id="page-title">Express Todo</h1>
                <h3>Today is <PostDate date={new Date()}></PostDate></h3>
                <h3>
                  <FormattedMessage
                     id="welcome"
                     defaultMessage={`You have {number} {number, plural,
                       one {TODO}
                       other {TODOs}
                     }`}
                     values={{number: todos.length || 'no'}}
                  />
                </h3>
                <div id="list">

                    <TodoInput addTodo={addTodo} />

                    {todos.map( function( todo, idx ) {
                        return (
                            <TodoItem
                                key={idx}
                                todo={todo}
                                update={update}
                                remove={remove} /> );
                        })}
                </div>
            </div>
        )
}

TodoList.prototype.propTypes = {
  todos:    PropTypes.array.isRequired,
  update:   PropTypes.func.isRequired,
  addTodo:  PropTypes.func.isRequired,
  remove :  PropTypes.func.isRequired
}
