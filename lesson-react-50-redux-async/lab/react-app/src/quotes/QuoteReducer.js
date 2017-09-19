import { QUOTE_REQUEST, QUOTE_RECEIVE, QUOTE_SAVE } from './QuoteConstants'

// TODO add the isDelayed property to the initialState, set it to false
const initialState = { name: '', quote: '' };

export default function nameReducer(state = initialState, action) {

	switch (action.type) {

		case QUOTE_RECEIVE:
		case QUOTE_SAVE:
			return {
				...state,
				// TODO set the isDelayed property
				name: action.payload.name,
				quote: action.payload.quote
			};

		case QUOTE_REQUEST:
			return {
				...state,
				// TODO update the state, set the value of the isDelayed property
			};

		default:
			return state
	}
}
