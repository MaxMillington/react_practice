import {SAVE_QUOTE} from './QuoteConstants'

export function saveQuote( dispatch, name, quote ) {
	dispatch( {
		type: SAVE_QUOTE,
		payload: {
			name,
			quote
		}
	})
}
