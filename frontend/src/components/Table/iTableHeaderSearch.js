import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class ITableHeaderSearch extends Component {

  render() {
    return (
      <div className="table-search-field-container">
        <span className="table-search-field-name">Cauta :</span>
        <input className="table-search-field-input" type="search" placeholder="Introdu criteriile"></input>
        <i class="table-search-field-icon"><Icon name='search' /></i>
      </div>
    )
  }
}

export default ITableHeaderSearch;
