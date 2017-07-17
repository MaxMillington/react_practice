import * as constants from './actions'

const initialState = { name: '', quote: '', isDelayed: false };

export default function nameReducer(state, action) {
	state = state || initialState;
	switch (action.type) {

		case constants.SAVE_NAME:
		case constants.RECEIVE_NAME:
			return {
				...state,
				name: action.payload.name,
				quote: action.payload.quote,
				isDelayed: false
			};

		case constants.REQUEST_NAME:
			return {
				...state,
				isDelayed: action.payload.isDelayed
			};

		default:
			return state
	}
}
