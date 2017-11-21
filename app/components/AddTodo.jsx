import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ todo: event.target.value })
  }

  handleSubmit(event) {
    alert(this.state.todo)
    event.preventDefault();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="What do you need to do?"
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default AddTodo;
