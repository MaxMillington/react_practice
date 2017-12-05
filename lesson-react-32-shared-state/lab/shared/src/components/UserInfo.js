

let userName = '';

export const getName = () => {
  return userName
}

let listeners = []

const emitEvent = () => {
  listeners.forEach( callback => callback(userName))
}

export const setName = (name) => {
  console.log('name is ' + name)
  userName = name;
  emitEvent()
}

export const registerListener = (callback) => {
  listeners.push(callback)
}

export const unregisterListener = (callback) => {
  listeners = listeners.filter((item) => {
    item !== callback
  })
  return listeners
}

export default {
  getName, setName, registerListener, unregisterListener
}
