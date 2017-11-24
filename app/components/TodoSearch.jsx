import React, { Component } from 'react';

class TodoSearch extends Component {
    constructor(props) {
      super(props);
      this.state = { term: '' }

      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(term) {
      this.setState({ term });
      this.props.onSearch(term);
    }

    render() {
      return (
        <form>
          <input
            type="search"
            placeholder="Search Todos"
            value={this.state.term}
            onChange={event => this.handleChange(event.target.value)}
          />
        </form>
      )
    }
}

export default TodoSearch
