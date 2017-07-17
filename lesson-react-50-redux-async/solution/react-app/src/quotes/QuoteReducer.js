import * as constants from './QuoteActions'

// TODO add the isDelayed property to the initialState, set it to false
const initialState = { name: '', quote: '', idDelayed: false };

export default function nameReducer(state, action) {
	state = state || initialState;
	switch (action.type) {

		case constants.SAVE_QUOTE:
		case constants.RECEIVE_QUOTE:
			return {
				...state,
				...action.payload
			};

		case constants.REQUEST_QUOTE:
			return {
				...state,
				...action.payload
			};

		default:
			return state
	}
}
