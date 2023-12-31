import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }

  filterItem = (item) => {
    return item.name.toLowerCase().search(this.state.search) !== -1;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;

