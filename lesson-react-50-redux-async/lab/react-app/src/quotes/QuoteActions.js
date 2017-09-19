
import { QUOTE_REQUEST, QUOTE_RECEIVE, QUOTE_SAVE } from './QuoteConstants'

function requestQuote() {
  return {
    type: QUOTE_REQUEST,
    payload: {
      // TODO set the value of the isDelayed property
    }
  }
}
function receiveQuote( name, quote ) {
  return {
    type: QUOTE_RECEIVE,
    payload: {
      // TODO set the value of the isDelayed property
      name,
      quote
    }
  }
}

// TODO dispatch the requestQuotes() action immediately
// TODO create a setTimeout() call with a 2 second delay
// TODO after two seconds, dispatch the receiveQuote() action

export function saveQuote( name, quote ) {
  return {
    type: QUOTE_SAVE,
    payload: {
      name,
      quote
    }
  }
}
