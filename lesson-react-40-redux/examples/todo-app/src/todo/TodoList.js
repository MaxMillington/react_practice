import React from 'react'
import {PropTypes} from 'prop-types'

import TodoItem from './TodoItem'
import TodoInput from './TodoInput'


export default function TodoList(props) {
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
	onRemove: PropTypes.func.isRequired,
	title: 		PropTypes.string,
	todos: 		PropTypes.array.isRequired
}
