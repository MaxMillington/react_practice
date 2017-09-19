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
		{/* TODO use the new isDelayed property to add the 'Loading...' message */}
		<h1>{props.name}{props.name ? ':' : ''} {props.quote}</h1>
		<form onSubmit={submit}>
			<input placeholder="Full Quote" ref={data => _name = data} />
			<input placeholder="Quote of the Day" ref={data => _quote = data} />
			<button type="submit">Save</button>
		</form>
		</div>
	)
}

Quote.prototype.propTypes = {
	// TODO add the prop type for the isDelayed property
	name: 	PropTypes.string,
	quote: 	PropTypes.string,
	saveQuote: PropTypes.func.isRequired
}
