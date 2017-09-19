import { QUOTE_REQUEST, QUOTE_RECEIVE } from './QuoteConstants'

// TODO add the isDelayed property to the initialState, set it to false
const initialState = { name: '', quote: '', isDelayed: false };

export default function quoteReducer(state = initialState, action) {
	switch (action.type) {
		case QUOTE_RECEIVE:
			return {
				...state,
				name: action.payload.name,
				quote: action.payload.quote,
				isDelayed: action.payload.isDelayed,
			};
		case QUOTE_REQUEST:
			return {
				...state,
				isDelayed: action.payload.isDelayed,
			};
		default:
			return state
	}
}
