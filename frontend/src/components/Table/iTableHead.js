import React, { Component } from 'react';

class ITableHead extends Component {

  render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    )
  }
}

export default ITableHead;
