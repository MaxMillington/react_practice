
var $ = require('jquery')

var BASE = '/v1/todos';

module.exports = {
  create: function(content, callback) {
    $.post(BASE, {
      content: content
    }, function(todos) {
      callback(todos);
    });
  },
  findAll: function(callback) {
    $.get(BASE, function(todos) {
      callback(todos);
    });
  },
  update: function(todo, callback) {
    $.post(BASE + '/' + todo.id, {
      todo: todo
    }, function(todos) {
      callback(todos);
    });
  },
  remove: function(id, callback) {
    $.ajax({
      url: BASE + '/' + id,
      type: 'DELETE',
      success: function(todos) {
        callback(todos);
      }
    });
  }
};
