import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {completed, text} = this.props;
    return (
      <div>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    )
  }
};

export default Todo;
