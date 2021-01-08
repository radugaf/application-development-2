import React, { Component } from 'react';

class ITableHeaderTitle extends Component {

  render() {
    return (
      <span className={this.props.culoare}>{this.props.titlu}</span>
    )
  }
}

export default ITableHeaderTitle;
