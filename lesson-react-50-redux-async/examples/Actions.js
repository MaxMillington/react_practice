

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

export function saveQuote( name, quote ) {
  return function( dispatch ) {
    dispatch( requestQuote() )

    setTimeout( () => {
      dispatch( receiveQuote( name, quote )),
    }, 2000 )
  }
}
