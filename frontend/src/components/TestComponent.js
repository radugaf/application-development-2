import React, { Component } from "react";
import DataTable from "../components/DataTable/datatable";
import DataTablenobtn from "../components/DataTable/datatablenobtn";

class TestComponent extends Component {
  render() {
    return (
      <>
      <div className="ui justified container">
        Use this page (component) to <strong>create and test</strong> new
        features.
      </div>
      <h1>Comenzi Noi</h1>
      <DataTable />
      <h1>Comenzi Acceptate</h1>
      <DataTablenobtn />
      <h1>Comenzi Respinse</h1>
      <DataTablenobtn />
      <h1>Comenzi Onorate Partial</h1>
      <DataTablenobtn />
      </>
    );
  }
}

export default TestComponent;
