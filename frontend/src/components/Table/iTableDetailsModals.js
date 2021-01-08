import React, { Component } from 'react';

class ITableDetailsModals extends Component {

  render() {
    return (
      <div className="table-modals">
        {this.props.children}
      </div>
    )
  }
}

export default ITableDetailsModals;
