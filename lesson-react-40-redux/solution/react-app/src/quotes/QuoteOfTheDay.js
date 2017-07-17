import React from 'react'
import { connect } from 'react-redux';

function AnyNameYouWant(props) {
  return (
    <div>
      Quote of the Day is "{props.quote || 'No Quote'}" -- {props.name || 'no one'}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
 	return {
 		quote: state.quotes.quote,
    name: state.quotes.name
 	}
};

const QuoteOfTheDay = connect(
	mapStateToProps
)(AnyNameYouWant);

export default QuoteOfTheDay
