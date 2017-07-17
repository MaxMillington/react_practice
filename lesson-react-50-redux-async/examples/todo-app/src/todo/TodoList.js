import React from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'


function TodoList(props) {
	const title = props.title || "TODO List"
	return (
		<div className="todoList">
			<h1>{title}</h1>
			<TodoInput onCreate={props.onCreate} />
			{props.todos.map( (todo, i) => {
				return (<TodoItem key={todo.id} 
					todo={todo} 
					onRemove={props.onRemove} />)
			})}
		</div>
	);
}

TodoList.propTypes = {
	onRemove: React.PropTypes.func.isRequired,
	title: React.PropTypes.string,
	todos: React.PropTypes.array.isRequired
}

export default TodoList;