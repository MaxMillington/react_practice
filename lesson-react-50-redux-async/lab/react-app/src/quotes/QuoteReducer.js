import * as constants from './QuoteActions'

// TODO add the isDelayed property to the initialState, set it to false
const initialState = { name: '', quote: '', isDelayed: false };

export default function nameReducer(state, action) {
	state = state || initialState;
	switch (action.type) {

		case constants.SAVE_QUOTE:
		case constants.RECEIVE_QUOTE:
			return {
				...state,
				name:  action.payload.name,
				quote: action.payload.quote
				// TODO set the value of isDelayed to 'false'
		};

		case constants.REQUEST_QUOTE:
			return {
				...state
				// TODO set the value of isDelayed to 'true'
			};

		default:
			return state
	}
}
