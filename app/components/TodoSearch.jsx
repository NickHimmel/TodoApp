import React, { Component } from 'react';

class TodoSearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchText: '',
        showCompleted: false
      }

      this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch() {
      const showCompleted = this.refs.showCompleted.checked;
      const searchText = this.refs.searchText.value;
      this.setState( { searchText, showCompleted } );
      // console.log(this.state.showCompleted)

      this.props.onSearch(this.state.searchText.toLowerCase(), this.state.showCompleted);
    }

    render() {
      return (
        <form>
          <input
            type="search"
            placeholder="Search Todos"
            ref="searchText"
            value={this.state.searchText}
            onChange={this.handleSearch}
          />
          <label>
            <input
              type="checkbox"
              ref="showCompleted"
              value={this.state.showCompleted}
              onChange={this.handleSearch}
            />
            Show completed todos
          </label>
        </form>
      )
    }
}

export default TodoSearch;
