
export const SAVE_QUOTE = "SAVE_QUOTE"
export const REQUEST_QUOTE = "REQUEST_QUOTE"
export const RECEIVE_QUOTE = "RECEIVE_QUOTE"

export function saveQuote( dispatch, name, quote ) {
	dispatch( {
		type: SAVE_QUOTE,
		payload: {
			name,
			quote
		}
	})
}
