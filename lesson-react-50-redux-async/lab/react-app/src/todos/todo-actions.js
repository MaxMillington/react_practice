
import Constants from './todo-constants'

const TodoActions = {

  create( content ) {
    return {
      actionType: Constants.TODO_CREATE,
      content
    }
  },

  findAll() {
    return {
      actionType: Constants.TODO_FIND_ALL
    }
  },

  remove(id) {
    return {
      actionType: Constants.TODO_DELETE,
      id
    }
  },

  update( todo ) {
    return {
      actionType: Constants.TODO_CREATE,
      todo
    }
  }
}

export default TodoActions
