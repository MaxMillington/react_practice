//import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import actions from './TodoActions';


const mapStateToProps = (state, ownProps) => {
 	return {
 		todos:			state.todos.todos
 	}
};

const mapDispatchToProps = (dispatch) => {
	 return {
		 addTodo:(content)=> {
			 dispatch( actions.create( content ))
	 	},
    update: (todo) => {
      dispatch( actions.create( todo ))
    },
    remove: (id) => {
      dispatch( actions.remove( id ))
    }
	 }
};
let TodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default TodoContainer;
