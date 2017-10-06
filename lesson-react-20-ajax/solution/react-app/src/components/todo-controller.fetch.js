
var fetch = require('isomorphic-fetch')

var BASE = '/v1/todos';

module.exports = {
  create: function(content, callback) {
    fetch(BASE, {
      method: 'POST',
      body: JSON.stringify({
        content: content
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( function(response) {
      return response.json()
    }).then( function( todos ) {
          callback( todos );
    })
    .catch( function( err ) {
      console.error(err)
    });
  },
  findAll: function(callback) {
    fetch(BASE)
    .then( function(response) {
      return response.json()
    }).then( function( todos ) {
          callback( todos );
    })
    .catch( function( err ) {
      console.error(err)
    });
  },
  update: function(todo, callback) {
    fetch(BASE + '/' + todo.id, {
      method: 'POST',
      body: JSON.stringify({ todo: todo}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( function(response) {
      return response.json()
    }).then( function( todos ) {
          callback( todos );
    })
    .catch( function( err ) {
      console.error(err)
    });
  },
  remove: function(id, callback) {
    fetch( BASE + '/' + id, {
      method: 'DELETE'
    })
    .then( function(response) {
      return response.json()
    }).then( function( todos ) {
          callback( todos );
    })
    .catch( function( err ) {
      console.error(err)
    });
  }
};
