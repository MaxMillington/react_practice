var uuid = require('uuid')

var todos = [{id: uuid(), content: 'First'}];

module.exports = {
    create: function (content, callback) {
        var todo = {
            id: uuid(),
            content: content
        };
        todos = todos.concat(todo);
        callback( todos);
    },
    findAll: function ( callback ) {
        callback( todos );
    },
    update: function (item, callback) {
        var tt = todos.map(function (todo) {
            if (item.id === todo.id) {
                todo.content = item.content;
            }
            return todo;
        });
        todos = tt;
        callback( todos );
    },
    delete: function (id, callback ) {
        var tt = todos.filter(function (todo) {
            return (todo.id !== id);
        });
        todos = tt;
        callback( todos );
    }
};
