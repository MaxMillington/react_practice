var express = require('express');
var router = express.Router();

var uuid = require('uuid');

/* todos RESTful api */
var BASE = '/v1/todos'

var todos = [
  {id:uuid(), content:"Hello, y'all" }
]

router.get('/', function(req, res, next) {
  res.json(todos)
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  var todo = todos.find( todo => todo.id === id)
  res.json(todo)
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id
  todos = todos.filter( todo => todo.id !== id)
  res.json(todos)
});

router.post('/', function(req, res, next){
  var todo = {
    id: uuid(),
    content: req.body.content
  }
  todos.push(todo);
  res.json(todos)
});

module.exports = router;
