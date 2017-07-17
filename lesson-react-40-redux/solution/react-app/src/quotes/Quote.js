import React from 'react'
import PropTypes from 'prop-types'

export default function Quote( props ) {

	let _name, _quote

	function submit(e) {
		e.preventDefault();
		props.saveQuote( _name.value, _quote.value )
		_name.value = ''
		_quote.value = ''
	}

	return (
		<div className="quoteInput">
		<h1>{props.name}{props.name ? ':' : ''} {props.quote}</h1>
		<form onSubmit={submit}>
			<input placeholder="Full Name" ref={data => _name = data} />
			<input placeholder="Quote of the Day" ref={data => _quote = data} />
			<button type="submit">Save</button>
		</form>
		</div>
	)
}
Quote.prototype.propTypes = {
	name: 		PropTypes.string.isRequired,
	quote: 		PropTypes.string.isRequired,
	saveQuote: PropTypes.func.isRequired
}
