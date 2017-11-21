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
          <input type="submit" value="Add Todo"/>
        </form>
      </div>
    );
  }
}

export default AddTodo;
