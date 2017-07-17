/**
 * Created by clboyd on 9/9/16.
 */

import uuid from 'uuid';

let todos = [{id: uuid(), content: 'First'}];

module.exports = {
    create: function (content, callback) {
        const todo = {
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
        let tt = todos.map(function (todo) {
            if (item.id === todo.id) {
                todo.content = item.content;
            }
            return todo;
        });
        todos = tt;
        callback( todos );
    },
    
    delete: function (id, callback ) {
        let tt = todos.filter(function (todo) {
            return (todo.id !== id);
        });
        todos = tt;
        callback( todos );
    }
};
