
import Constants from './TodoConstants'
import controller from './TodoController'

class TodoActions {

  create( dispatch, content ) {
    let todos = controller.create( content )
    dispatch( {
      type: Constants.TODO_CREATE,
      todos
    });
  }

  findAll( dispatch ) {
    let todos = controller.findAll()
    dispatch( {
      type: Constants.TODO_FIND_ALL,
      todos
    })
  }

  remove( dispatch, id) {
    let todos = controller.remove(id)
    dispatch( {
      type: Constants.TODO_DELETE,
      todos
    })
  }

  update( dispatch, todo ) {
    let todos = controller.update(todo)
    dispatch( {
      type: Constants.TODO_CREATE,
      todos
    })
  }
}

export default new TodoActions()
