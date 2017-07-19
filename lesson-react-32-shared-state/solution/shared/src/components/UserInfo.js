

let userName = 'Unknown User';

let listeners = []

export function getName() {
  return userName
}

export function setName(name) {
  console.log('name is ' + name)
  userName = name;
  emitEvent()
}

function registerListener( callback ) {
  listeners.push( callback )
}

function unregisterListener( callback ) {
  listeners = listeners.filter( item => item !== callback )
}

function emitEvent() {
  listeners.forEach( cb => cb(userName))
}

export default {
  getName,
  setName,
  registerListener,
  unregisterListener
}
