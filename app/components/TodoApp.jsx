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
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }, {
          id: uuid(),
          text: 'Finish this video'
        }, {
          id: uuid(),
          text: 'Make dinner'
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClick (text) {
    this.setState( {
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  }

  handleSearch (searchText, showCompleted) {
    this.setState( { searchText, showCompleted } );
  }

  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onClick={this.handleClick}/>
      </div>
    )
  }
}

export default TodoApp;
