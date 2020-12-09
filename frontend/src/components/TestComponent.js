import React, { Component, useState } from "react";
import { Icon } from 'semantic-ui-react'

// IMPORT TABLE COMPONENTS
import ITableModalsAccept from './Table/iTableModalsAccept'
import ITableModalsDecline from './Table/iTableModalsDecline'
import ITableModalsPartial from './Table/iTableModalsPartial'



class TestComponent extends Component {


  render() {


    return (

      <>
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
        <tr className="">
          <td colspan="6">
            <div>
            <div>
              <table className="table-details-container">
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
            </div>
            <div className="table-modals">
            <ITableModalsAccept />
            <ITableModalsDecline />
            <ITableModalsPartial />
            </div>
            </div>
          </td>
        </tr>
      </table>
      </>
    );
  }
}

export default TestComponent;
