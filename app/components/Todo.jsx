import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, completed, text} = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            this.props.onToggle(id);
          }}/>
        {text}
      </div>
    )
  }
};

export default Todo;
