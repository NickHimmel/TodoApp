import React from 'react';

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
    return (
      <div>
        TodoApp.jsx
      </div>
    )
  }
}

export default TodoApp;
