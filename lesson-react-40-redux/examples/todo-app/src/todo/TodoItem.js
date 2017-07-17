import React from 'react'
import {PropTypes} from 'prop-types'

export default function TodoItem(props) {

	function remove(e) {
		e.preventDefault()
		props.onRemove(props.todo)
	}

	return (
		<div className="todoItem">
			<span className="content">{props.todo.content}</span>
			<span className="cancelX" title="Delete this item"
				onClick={remove}>X</span>
		</div>
	);
}

TodoItem.propTypes = {
	todo: 		PropTypes.object.isRequired,
	onRemove: PropTypes.func.isRequired
}
