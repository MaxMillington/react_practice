/**
 * Created by clboyd on 9/9/16.
 */

import uuid from 'uuid';

let todos = [{id: uuid(), content: 'First'}];

const actions = {
    create: function (content) {
        const todo = {
            id: uuid(),
            content: content
        };
        todos = todos.concat(todo);
        return todos;
    },

    findAll: function ( ) {
        return todos;
    },

    update: function (item) {
        let tt = todos.map(function (todo) {
            if (item.id === todo.id) {
                todo.content = item.content;
            }
            return todo;
        });
        todos = tt;
        return todos;
    },

    remove: function (id ) {
        let tt = todos.filter(function (todo) {
            return (todo.id !== id);
        });
        todos = tt;
        return todos;
    }
};

export default actions
