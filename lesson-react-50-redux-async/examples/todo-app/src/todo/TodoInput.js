import React from 'react'


function TodoInput(props) {
	let _content;
	function submit(e) {
		e.preventDefault();
		props.onCreate(_content.value);
		_content.value = '';
	}

	return (
		<div className="todoInput">
			<form onSubmit={submit}>
				<input type="text" ref={input => _content = input} />
			</form>
		</div>
	);
}

TodoInput.propTypes = {
	onCreate: React.PropTypes.func.isRequired
}

export default TodoInput;