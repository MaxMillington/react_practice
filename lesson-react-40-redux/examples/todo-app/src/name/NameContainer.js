//import React, { Component } from 'react';
import { connect } from 'react-redux';
import Name from './Name';
import * as actions from './actions';
import './name.css'


const mapStateToProps = (state, ownProps) => {
	const { name, quote, isDelayed } = state;
 	return {
 		name,
 		quote,
		isDelayed
 	}
};
const mapDispatchToProps = (dispatch) => {
	 return {
		 saveName:(name, quote)=> {
			 dispatch(actions.saveName( name, quote ))
	 	}
	 }
};
let NameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Name);

export default NameContainer;
