import React, { Component } from 'react';

class ITable extends Component {

  render() {
    return (
      <table className="table-container">
        {this.props.children}
      </table>
    )
  }
}

export default ITable;
