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
    event.preventDefault();
    if (this.state.todo) {
      this.props.onClick(this.state.todo)
      this.setState({ todo: '' })
    }
    else { alert('Add a todo!') }
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
        <input type="submit" value="Add Todo"/>
      </form>
    );
  }
}

export default AddTodo;
