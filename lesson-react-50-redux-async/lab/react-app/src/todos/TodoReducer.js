
import constants from './TodoConstants'
import controller from './TodoController'

const initialState = {todos: controller.findAll()}

export default function todoReducer(state, action) {
	state = state || initialState;
	switch (action.type) {

		case constants.TODO_CREATE:
		case constants.TODO_FIND_ALL:
		case constants.TODO_UPDATE:
		case constants.TODO_DELETE:
			return {
				...state,
				todos:  action.todos
			};

		default:
			return state
	}
}
