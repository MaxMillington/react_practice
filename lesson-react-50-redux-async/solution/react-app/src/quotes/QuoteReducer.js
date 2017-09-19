import { QUOTE_REQUEST, QUOTE_RECEIVE } from './QuoteConstants'

// TODO add the isDelayed property to the initialState, set it to false
const initialState = { name: '', quote: '', isDelayed: false };

export default function nameReducer(state = initialState, action) {

	switch (action.type) {

		case QUOTE_RECEIVE:
			return {
				...state,
				...action.payload
			};

		case QUOTE_REQUEST:
			return {
				...state,
				...action.payload
			};

		default:
			return state
	}
}
