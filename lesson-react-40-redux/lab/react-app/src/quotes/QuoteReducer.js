import * as constants from './QuoteActions'

const initialState = { name: '', quote: '' };

export default function nameReducer(state, action) {
	state = state || initialState;
	switch (action.type) {

		case constants.SAVE_QUOTE:
		case constants.RECEIVE_QUOTE:
			return {
				...state,
				name:  action.payload.name,
				quote: action.payload.quote
			};

		case constants.REQUEST_QUOTE:
			return {
				...state
			};

		default:
			return state
	}
}
