import React, { Component } from 'react';
import TodoList from 'TodoList.jsx';
import AddTodo from 'AddTodo.jsx';

class TodoApp extends Component {
  constructor () {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Finish this video'
        }, {
          id: 4,
          text: 'Make dinner'
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (text) {
    alert('new todo:' + text);
  }

  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onClick={this.handleClick}/>
      </div>
    )
  }
}

export default TodoApp;
