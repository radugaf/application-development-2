import React, { Component } from 'react';

class ITableHeadItem extends Component {

  render() {
    return (
      <th>
        {this.props.item}
      </th>
    )
  }
}

export default ITableHeadItem;
