import React from 'react'
import PropTypes from 'prop-types'

const QuoteOfTheDay = ( props ) => {
  return (
    <div className="quoteInput">
      <h1>{props.name}{props.name ? ':' : ''} {props.quote}</h1>
    </div>
  )
}
QuoteOfTheDay.prototype.propTypes = {
  name: 		PropTypes.string.isRequired,
  quote: 		PropTypes.string.isRequired
}

export default QuoteOfTheDay