import React, { Component, useState } from "react";

// IMPORT TABLE COMPONENTS

import ITable from './Table/iTable.js';
import ITableHeader from './Table/iTableHeader.js';
import ITableHeaderTitle from './Table/iTableHeaderTitle.js'
import ITableHeaderSearch from './Table/iTableHeaderSearch.js'
import ITableHead from './Table/iTableHead.js'
import ITableHeadItem from './Table/iTableHeadItem.js'
import ITableModalsAccept from './Table/iTableModalsAccept.js'
import ITableModalsDecline from './Table/iTableModalsDecline.js'
import ITableModalsPartial from './Table/iTableModalsPartial.js'
import ITableBody from './Table/iTableBody.js'
import ITableBodyItem from './Table/iTableBodyItem.js'
import ITableBodyItemView from './Table/iTableBodyItemView.js'
import ITableDetailsContainer from './Table/iTableDetailsContainer.js'
import ITableDetails from './Table/iTableDetails.js'
import ITableDetailsModals from './Table/iTableDetailsModals.js'


class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corders: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState ({
        isLoaded: true,
        corders: json,
      })
    });
  }

  render() {

    var {isLoaded, corders} = this.state;

    return (
        <ITable>

          <ITableHeader>
            <ITableHeaderTitle titlu="Comenzi Acceptate" culoare="verde"/>
            <ITableHeaderSearch/>
          </ITableHeader>

          <ITableHead>
            <ITableHeadItem item="#" />
            <ITableHeadItem item="Client" />
            <ITableHeadItem item="Data comanda" />
            <ITableHeadItem item="Status" />
            <ITableHeadItem item="Valoare Comanda" />
            <ITableHeadItem item="Actiune" />
          </ITableHead>

          {corders.map(corder =>(
          <>
          <ITableBody>
            <ITableBodyItem item={corder.id} />
            <ITableBodyItem item={corder.name} />
            <ITableBodyItem item={corder.username} />
            <ITableBodyItem item={corder.email} />
            <ITableBodyItem item={corder.address.street}/>
            <ITableBodyItemView />
          </ITableBody>

          <ITableDetailsContainer>

            <ITableDetails>

              <ITableHead>
                <ITableHeadItem item="Produs" />
                <ITableHeadItem item="Cantitate" />
                <ITableHeadItem item="Pret Buc" />
                <ITableHeadItem item="Valoare T.V.A Buc" />
                <ITableHeadItem item="Pret Total" />
              </ITableHead>

              <ITableBody>
                <ITableBodyItem item={corder.address.suite} />
                <ITableBodyItem item={corder.address.city} />
                <ITableBodyItem item={corder.address.zipcode} />
                <ITableBodyItem item={corder.phone} />
                <ITableBodyItem item={corder.website} />
              </ITableBody>

            </ITableDetails>
            <ITableDetailsModals>
              <ITableModalsAccept />
              <ITableModalsDecline />
              <ITableModalsPartial />
            </ITableDetailsModals>

          </ITableDetailsContainer>

          </>
          ))};

        </ITable>
    );
  }
}

export default TestComponent;
