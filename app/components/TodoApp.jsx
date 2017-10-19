import React from 'react';
import TodoList from 'TodoList.jsx';

class TodoApp extends React.Component {
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
        }
      ]
    }
  }
  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
}

export default TodoApp;
