
import Constants from './TodoConstants'
import controller from './TodoController'

class TodoActions {

  create( content ) {
    let todos = controller.create( content )
    return function( dispatch ) {
      dispatch( {
        type: Constants.TODO_CREATE,
        todos
      });
    }
  }

  findAll( ) {
    let todos = controller.findAll()
    return function( dispatch ) {
      dispatch( {
        type: Constants.TODO_FIND_ALL,
        todos
      })
    }
  }

  remove( id ) {
    let todos = controller.remove(id)
    return function( dispatch ) {
      dispatch( {
        type: Constants.TODO_DELETE,
        todos
      })
    }
  }

  update( todo ) {
    let todos = controller.update(todo)
    return function( dispatch ) {
      dispatch( {
        type: Constants.TODO_CREATE,
        todos
      })
    }
  }
}

export default new TodoActions()
