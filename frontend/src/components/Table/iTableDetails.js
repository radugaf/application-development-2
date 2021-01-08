import React, { Component } from 'react';

class ITableDetails extends Component {

  render() {
    return (
      <div>
        <table className="table-details-container">
            {this.props.children}
        </table>
      </div>
    )
  }
}

export default ITableDetails;
