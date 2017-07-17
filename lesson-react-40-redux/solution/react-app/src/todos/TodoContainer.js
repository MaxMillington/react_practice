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
			 actions.create( dispatch, content )
	 	},
    update: (todo) => {
      actions.create( dispatch, todo )
    },
    remove: (id) => {
      actions.remove( dispatch, id )
    }
	 }
};
let TodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default TodoContainer;
