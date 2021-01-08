import React, { Component } from 'react';

class ITableBody extends Component {

  render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    )
  }
}

export default ITableBody;
