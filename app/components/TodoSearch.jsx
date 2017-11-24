import React, { Component } from 'react';

class TodoSearch extends Component {
    constructor(props) {
      super(props);
      this.state = { term: '' }

      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      this.setState({ term: event.target.value })
    }

    render() {
      return (
        <form>
          <input
            placeholder="Search Todos"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </form>
      )
    }
}

export default TodoSearch
