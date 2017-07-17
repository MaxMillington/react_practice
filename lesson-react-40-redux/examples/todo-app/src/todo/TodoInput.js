import React from 'react'
import {PropTypes} from 'prop-types'

export default function TodoInput(props) {
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
	onCreate: PropTypes.func.isRequired
}
