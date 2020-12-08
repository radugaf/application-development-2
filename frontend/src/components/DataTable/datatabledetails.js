import React, {useState, useEffect } from "react";
import DataTableListDetails from "./datatablelistdetails.js";

require ("es6-promise").polyfill();
require("isomorphic-fetch");

export default function DataTableDetails() {

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("")
    //https://devmentor.live/api/examples/contacts?api_key=b7c58b
    .then(response => response.json())
    .then(json => setData(json));
  }, []);

  function search(rows){
  return rows.filter(
    (row) =>
      row.firstName.toLowerCase().indexOf(q) > -1 ||
      row.lastName.toLowerCase().indexOf(q) > -1
    );
  }

  return (
    <>
    <div className="DataTable">
    <DataTableListDetails data={search(data)}/>
    </div>

    </>

  );
}
