/**
 * Created by clboyd on 9/16/16.
 */

import Dispatcher from '../components/Dispatcher';
import constants from './todo-constants';
import controller from './todo-controller';
import {EventEmitter} from 'events';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let todos = [];

var TodoStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return todos;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    registerChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register(function(action) {

    switch (action.actionType) {
        case constants.TODO_CREATE:
            controller.create(action.content, function(results) {
                todos = results;
                TodoStore.emitChange();
            });
            break;
        case constants.TODO_DELETE:
            controller.delete(action.id, function(results) {
                todos = results;
                TodoStore.emitChange();
            });
            break;
        case constants.TODO_FIND_ALL:
            controller.findAll(function(results) {
                todos = results;
                TodoStore.emitChange();
            });
            break;
        case constants.TODO_UPDATE:
            controller.update(action.todo, function(results) {
                todos = results;
                TodoStore.emitChange();
            });
            break;
        default:
          break;
    }
});

module.exports = TodoStore;
