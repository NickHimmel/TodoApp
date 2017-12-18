import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, completed, text, createdAt} = this.props;
    const renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      return message + moment.unix(timestamp).format('MMMM Do YYYY @ h:mm a');
    }
    return (
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            this.props.onToggle(id);
          }}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
};

export default Todo;
