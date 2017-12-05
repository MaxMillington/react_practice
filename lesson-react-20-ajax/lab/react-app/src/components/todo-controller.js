
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

  findAll: function(callback) {
    axios.get(BASE)
      .then(function(response) {
        callback(response.data)
      })
      .catch(function(error) {
        console.log('error', error)
      })
  },

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
