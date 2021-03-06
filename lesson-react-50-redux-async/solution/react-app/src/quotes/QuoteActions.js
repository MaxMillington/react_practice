
import { QUOTE_REQUEST, QUOTE_RECEIVE } from './QuoteConstants'

function requestQuote() {
  return {
    type: QUOTE_REQUEST,
    payload: {
      isDelayed: true
    }
  }
}
function receiveQuote( name, quote ) {
  return {
    type: QUOTE_RECEIVE,
    payload: {
      name,
      quote,
      isDelayed: false
    }
  }
}

// TODO dispatch the requestQuotes() action immediately
// TODO create a setTimeout() call with a 2 second delay
// TODO after two seconds, dispatch the receiveQuote() action

export function saveQuote( name, quote ) {
  return function( dispatch ) {
    dispatch( requestQuote() )

    setTimeout( () => {
      dispatch( receiveQuote( name, quote ))
    }, 2000 )
  }
}
