import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList.jsx';
import AddTodo from 'AddTodo.jsx';
import TodoSearch from 'TodoSearch.jsx';
import TodoAPI from 'TodoAPI.jsx';

class TodoApp extends Component {
  constructor () {
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate () {
    TodoAPI.setTodos(this.state.todos);
  }

  handleClick (text) {
    this.setState( {
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }

  handleToggle (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }

      return todo ;
    });

    this.setState( {todos: updatedTodos} )
  }

  handleSearch (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase() } );
  }

  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onClick={this.handleClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp;
