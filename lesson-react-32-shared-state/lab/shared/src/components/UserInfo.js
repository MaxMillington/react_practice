

let userName = '';

export function getName() {
  return userName
}

export function setName(name) {
  console.log('name is ' + name)
  userName = name;
  emitEvent( name )
}

export default {
  getName, setName, registerListener, unregisterListener
}

let listeners = []

export function registerListener( callback ) {
  listeners.push( callback )
}

export function unregisterListener( callback ) {
  listeners = listeners.filter( cb => cb !== callback )
}

function emitEvent( name ) {
  listeners.forEach( (cb) => cb( name ))
}
