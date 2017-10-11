//import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import * as constants from './TodoConstants'
import actions from './TodoActions';
import controller from './TodoController'


const mapStateToProps = (state, ownProps) => {
 	return {
 		todos:			state.todos.todos
 	}
};

const mapDispatchToProps = (dispatch) => {
	 return {
		 addTodo:(content)=> dispatch({
       type: constants.TODO_CREATE,
       todos: controller.create( content )
     }),

    update: (todo) => dispatch({
      type: constants.TODO_UPDATE,
      todos: controller.update( todo )
    }),

    remove: (id) => dispatch({
      type: constants.TODO_DELETE,
      todos: controller.remove( id )
    })
	 }
};
let TodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default TodoContainer;
