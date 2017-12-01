var $ = require('jquery');

module.exports = {
  setTodos (todos)  {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos () {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos: [];
  },
  filterTodos (todos, showCompleted, searchText) {
    let filteredTodos = todos;
    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })

    return filteredTodos;
  }
};
