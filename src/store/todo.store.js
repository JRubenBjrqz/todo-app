import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo('Ruby'),
        new Todo('Sapphire'),
        new Todo('Emerald'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore🐉');
}

export default {
    initStore,
}