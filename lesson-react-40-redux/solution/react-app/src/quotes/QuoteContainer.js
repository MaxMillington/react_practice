//import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from './QuoteActions';
import {SAVE_QUOTE} from './QuoteConstants'
import Quote from './Quote';
import './Quote.css'

const mapStateToProps = (state) => {
  return {
    name: state.quotes.name,
    quote: state.quotes.quote
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveQuote: (name, quote) => dispatch({
      type: SAVE_QUOTE,
      payload: {
        name,
        quote        
      }
    })
  }
}

const QuoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote)

export default QuoteContainer;
