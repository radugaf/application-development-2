import React, { Component } from 'react';

class ITableHeader extends Component {

  render() {
    return (
      <tr>
        <td className="table-header-container" colspan="6">
          <div className="table-header">
            {this.props.children}
          </div>
        </td>
      </tr>
    )
  }
}

export default ITableHeader;
