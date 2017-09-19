//import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quote from './Quote';
import * as actions from './QuoteActions';
import './Quote.css'

const mapStateToProps = (state, ownProps) => {
 	return {
    // TODO map the isDelayed property
 		name:			state.quotes.name,
 		quote:		state.quotes.quote
 	}
};
const mapDispatchToProps = (dispatch) => {
	 return {
		 saveQuote:(name, quote)=> {
			 dispatch( actions.saveQuote( name, quote ))
	 	}
	 }
};
let QuoteContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Quote);

export default QuoteContainer;
