import Dispatcher from '../components/Dispatcher';
import constants from './todo-constants';
import todoController from './todo-controller';
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

function emitChangeEvent() {
    TodoStore.emitChange();
}

Dispatcher.register(function(action) {
    switch (action.actionType) {

        case constants.TODO_CREATE:
        // TODO delegate the work to the controller.create() method
            break;

        case constants.TODO_DELETE:
        // TODO delegate the work to the controller.delete() method
            break;

        case constants.TODO_FIND_ALL:
        // TODO delegate the work to the controller.findAll() method
            break;

        case constants.TODO_UPDATE:
        // TODO delegate the work to the controller.update() method
            break;

        default:
            break;

    }
});

module.exports = TodoStore;
