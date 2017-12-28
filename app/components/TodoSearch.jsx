import React, { Component } from 'react';

class TodoSearch extends Component {
    constructor(props) {
      super(props);

      this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch() {
      const showCompleted = this.refs.showCompleted.checked;
      const searchText = this.refs.searchText.value;
      this.props.onSearch(showCompleted, searchText);
    }

    render() {
      return (
        <div className="container__header">
          <div>
            <input
              type="search"
              placeholder="Search Todos"
              ref="searchText"
              onChange={this.handleSearch}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                ref="showCompleted"
                onChange={this.handleSearch}
              />
              Show completed todos
            </label>
          </div>
        </div>
      )
    }
}

export default TodoSearch;
