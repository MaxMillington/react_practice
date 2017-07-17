
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import TodoList from './TodoList'

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
    // TODO add the initial state for the todos array
    this.state = {

    }
  }

  // TODO add the business logic: delete, addTodo
  
  render() {
    return (
      <div>
        {/* TODO pass the state and the callbacks to TodoList */}
        <TodoList></TodoList>
      </div>
    )
  }
}
