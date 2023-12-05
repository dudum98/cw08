import React, { Component } from 'react';

class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - {item.type}</li>
        ))}
      </ul>
    );
  }
}




export default List; 
