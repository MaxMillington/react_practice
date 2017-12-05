var axios = require('axios')

var BASE = 'todos'

module.exports = {
  create: function(content, callback) {
    axios.post(BASE, {
      content: content
      })
      .then(function(response) {
        callback(response.data)
      })
      .catch(function(error) {
      console.log('error', error)
    })
  },

  // TODO replace this method with one using jquery
  findAll: function(callback) {
    axios.get(BASE)
      .then(function(response) {
        callback(response.data)
      })
      .catch(function(error) {
        console.log('error', error)
      })
  },

  // TODO replace this method with one using jquery
  update: function(todo, callback) {
    axios.patch(BASE + '/' + todo.id, {
      todo: todo,
      })
      .then(function(response) {
        callback(response.data)
      })
      .catch(function(error) {
        console.log('error', error)
      })
  },

  // TODO replace this method with one using jquery
  remove: function(id, callback) {
    axios.delete(BASE + '/' + id)
      .then(function(response) {
        callback(response.data)
      })
      .catch(function(error) {
        console.log('error', error)
      })
  }

};
