import React, { Component } from 'react';
import TodoList from 'TodoList.jsx';
import AddTodo from 'AddTodo.jsx';
import TodoSearch from 'TodoSearch.jsx';
import uuid from 'node-uuid';

class TodoApp extends Component {
  constructor () {
    super();
    this.state = {
      searchText: '',
      showCompleted: false,
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: false
        }, {
          id: uuid(),
          text: 'Finish this video',
          completed: true
        }, {
          id: uuid(),
          text: 'Make dinner',
          completed: true
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClick (text) {
    this.setState( {
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  }

  handleToggle (id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo ;
    });

    this.setState( {todos: updatedTodos} )
  }

  handleSearch (searchText, showCompleted) {
    this.setState( { searchText, showCompleted } );
  }

  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onClick={this.handleClick}/>
      </div>
    )
  }
}

export default TodoApp;
