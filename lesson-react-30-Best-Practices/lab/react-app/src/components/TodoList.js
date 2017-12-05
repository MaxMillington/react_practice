var React = require('react');

import './styles.css'

const TodoItem = (props) => {

  const del = (event) => {
    event.preventDefault()
    props.delete( props.todo.id );
  }

  const update = (event) => {
    event.preventDefault()
    props.delete( props.todo.id );
  }

  return (
    <div className="item">
        <a  onClick={update}
            className="update-link"
        >
          {props.todo.content}
        </a>
        <a  onClick={del}
            title="Delete this todo item"
            className="del-btn"
        >
            Delete
        </a>
    </div>
  )

}


const TodoInput = (props) => {

  const submit = ( event ) => {
    event.preventDefault();
    var content = event.target.elements[0].value;
    event.target.elements[0].value = '';
    props.addTodo( content );
  }

    return (
      <form onSubmit={submit}>
          <div className="item-new">
              <input type="text" name="content" className="input"/>
          </div>
      </form>
    );
};

const TodoList = (props) => {
    return (
      <div id="layout">
          <h1 id="page-title">Express Todo</h1>
          <div id="list">

              <TodoInput addTodo={props.addTodo} />

            {props.todos.map( function(todo, idx) {
              return ( <TodoItem key={idx} todo={todo} delete={props.delete} /> );
            })}

          </div>
      </div>
    )
}

export default TodoList