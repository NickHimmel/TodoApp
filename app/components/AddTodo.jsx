import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = { todo: '' }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="What do you need to do?"/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
