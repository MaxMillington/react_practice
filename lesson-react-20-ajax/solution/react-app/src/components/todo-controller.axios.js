
var axios = require('axios')

var BASE = '/v1/todos';

module.exports = {
  create: function(content, callback) {
    axios.post(BASE, {
      content: content
    })
    .then( function(response) {
      callback(response.data);
    })
    .catch( function( err ) {
      console.error(err)
    });
  },
  findAll: function(callback) {
    axios.get(BASE)
    .then( function(response) {
      callback(response.data);
    })
    .catch( function( err ) {
      console.error(err)
    });
  },
  update: function(todo, callback) {
    axios.post(BASE + '/' + todo.id, {
      todo: todo
    })
    .then( function(response) {
      callback(response.data);
    })
    .catch( function( err ) {
      console.error(err)
    });
  },
  remove: function(id, callback) {
    axios.delete( BASE + '/' + id)
    .then( function(response) {
        callback(response.data);
    })
    .catch( function( err ) {
      console.error(err)
    });
  }
};
