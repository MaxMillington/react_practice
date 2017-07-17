
export const SAVE_NAME = "SAVE_NAME"
export const REQUEST_NAME = "REQUEST_NAME"
export const RECEIVE_NAME = "RECEIVE_NAME"

export function requestNames() {
	return {
		type: REQUEST_NAME,
		payload: {
			isDelayed: true
		}
	}
} 

export function receiveName( name, quote ) {
	return {
		type: RECEIVE_NAME,
		payload: {
			name,
			quote,
			isDelayed: false
		}
	}
} 

export function saveName( name, quote ) {
	return function( dispatch ) {
		dispatch( requestNames());

		setTimeout(() => {
			dispatch(receiveName( name, quote ))
		}, 2000);
		
	}
}
