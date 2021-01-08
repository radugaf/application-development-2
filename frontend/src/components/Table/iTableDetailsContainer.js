import React, { Component } from 'react';

class ITableDetailsContainer extends Component {

  render() {
    return (
      <tr className="">
        <td colspan="6">
          <div>
            {this.props.children}
          </div>
        </td>
      </tr>
    )
  }
}

export default ITableDetailsContainer;
