import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import * as actions from './QuoteActions';

import Quote from './Quote';
import './Quote.css'

export default class QuoteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quote: ''
    }
  }

  saveQuote = (name, quote) => {
    this.setState({
      name,
      quote
    })
  }

  render() {
    return (
      <Quote
        name={this.state.name}
        quote={this.state.quote}
        saveQuote={this.saveQuote}>
      </Quote>
    )
  }
}
