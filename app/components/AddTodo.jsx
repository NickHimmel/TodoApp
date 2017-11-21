import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ todo: event.target.value })
  }

  render() {

    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="What do you need to do?"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddTodo;
