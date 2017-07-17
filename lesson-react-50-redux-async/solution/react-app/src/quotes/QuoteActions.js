
export const SAVE_QUOTE = "SAVE_QUOTE"
export const REQUEST_QUOTE = "REQUEST_QUOTE"
export const RECEIVE_QUOTE = "RECEIVE_QUOTE"

export function requestQuote(dispatch) {
	dispatch( {
		type: REQUEST_QUOTE,
		payload: {
			// TODO add the isDelayed property, set it to 'true'
			isDelayed: true
		}
	})
}

export function receiveQuote( dispatch, name, quote ) {
	dispatch( {
		type: RECEIVE_QUOTE,
		payload: {
			// TODO add the isDelayed property, set it to 'false'
			isDelayed: false,
			name,
			quote
		}
	})
}

// TODO dispatch the requestQuotes() action immediately
// TODO create a setTimeout() call with a 2 second delay
// TODO after two seconds, dispatch the receiveQuote() action

export function saveQuote( dispatch, name, quote ) {
	requestQuote(dispatch)

	setTimeout(function() {
		receiveQuote(dispatch, name, quote)
	}, 2000)

}
