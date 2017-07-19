

let userName = 'Unknown User';

export function getName() {
  return userName
}

export function setName(name) {
  console.log('name is ' + name)
  userName = name;
  emitEvent()
}

export default {
  getName,
  setName,
  registerListener,
  unregisterListener
}

let listeners = []

function registerListener( callback ) {
  listeners.push( callback )
}

function unregisterListener( callback ) {
  listeners = listeners.filter( (item) =>
    item !== callback
  )
}

function emitEvent() {
  listeners.forEach( cb => cb(userName))
}
