
export const SAVE_QUOTE = "SAVE_QUOTE"
// TODO add two additional constants, REQUEST_QUOTE and RECEIVE_QUOTE

export function requestQuote( dispatch ) {
	dispatch( {
		type: REQUEST_QUOTE,
		payload: {
			// TODO add the isDelayed property, set it to 'true'
		}
	})
}

export function receiveQuote( dispatch, name, quote ) {
	dispatch( {
		type: RECEIVE_QUOTE,
		payload: {
			// TODO add the isDelayed property, set it to 'false'
			name,
			quote
		}
	})
}

// TODO dispatch the requestQuote() action immediately
// TODO create a setTimeout() call with a 2 second delay
// TODO after two seconds, dispatch the receiveQuote() action

export function saveQuote( dispatch, name, quote ) {
	dispatch( {
		type: SAVE_QUOTE,
		payload: {
			name,
			quote
		}
	})
}
