import React from 'react'


function TodoItem(props) {

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
	todo: React.PropTypes.object.isRequired,
	onRemove: React.PropTypes.func.isRequired
}

export default TodoItem;