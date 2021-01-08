import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react'

// IMPORT TABLE COMPONENTS



class TableProducts extends Component {


  render() {
    <table className="table-container">
      <tr>
        <td className="table-header-container" colspan="6">
          <div className="table-header">
            <span className="verde">Lista Produse Pending</span>
            <div className="table-search-field-container">
              <span className="table-search-field-name">Cauta :</span>
              <input className="table-search-field-input" type="search" placeholder="Introdu criteriile"></input>
              <i class="table-search-field-icon"><Icon name='search' /></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th>
          #
        </th>
        <th>
          Client
        </th>
        <th>
          Data Comanda
        </th>
        <th>
          Status
        </th>
        <th>
          Valoare Comanda
        </th>
        <th>
          Actiune
        </th>
      </tr>
      <tr>
        <td>
          1
        </td>
        <td>
          Edesia
        </td>
        <td>
          08.12.2020
        </td>
        <td>
          Pending
        </td>
        <td>
          120 Lei
        </td>
        <td>
          Click Here
        </td>
      </tr>
    </table>

    return (
    <>
      This is the products
    </>
    );
  }
}

export default TableProducts;
