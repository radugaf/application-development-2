import React, { Component } from 'react';

class ITableBodyItem extends Component {

  render() {
    return (
      <td>
        {this.props.item}
      </td>
    )
  }
}

export default ITableBodyItem;
