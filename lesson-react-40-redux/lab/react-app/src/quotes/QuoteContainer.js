//import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './QuoteActions';
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
    saveQuote: (name, quote) => {
      actions.saveQuote( dispatch, name, quote )
    }
  }
}

const QuoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote)

export default QuoteContainer;
