import React from 'react'

function Name( props ) {

	let _name, _quote

	function submit(e) {
		e.preventDefault();
		props.saveName( _name.value, _quote.value )
		_name.value = ''
		_quote.value = ''
	}

	return (
		<div className="nameInput">
		{props.isDelayed && <h1>Loading...</h1>}
		{props.isDelayed || <h1>{props.name}{props.name ? ':' : ''} {props.quote}</h1>}
		<form onSubmit={submit}>
			<input placeholder="Full Name" ref={data => _name = data} />
			<input placeholder="Quote of the Day" ref={data => _quote = data} />
			<button type="submit">Save</button>
		</form>
		</div>
	)
}

export default Name
