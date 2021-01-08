import React from "react";
import { Button, Modal, Form, Icon, Label } from 'semantic-ui-react'
import DataTableDetailsnobtn from "./datatabledetailsnobtn";

export default function DataTableListnobtn({ data }) {

  const columns = data[0] && Object.keys(data[0]);

  const [open, setOpen] = React.useState(false);

  return (
    <table className="main-text-color comenziPrimiteTableHead">
      <tr>
        <th>#</th>
        <th>Client</th>
        <th>Data comanda</th>
        <th>Status</th>
        <th>Valoare</th>
        <th>Actiune</th>
      </tr>
      {data.map(row =>
        <>
        <tr>
        {
          columns.map(column => <td>{row[column]}</td>)
          }
      </tr>
        </>)

    }
      <tbody class="tbody">
      <tr>
        <td>1</td>
        <td>Edesia</td>
        <td>12.08.2020</td>
        <td class="green">Pending</td>
        <td>450 Lei</td>
        <td><i class="fas fa-eye"></i>
        </td>
      </tr>
      <tr>
        <td colspan="6"><DataTableDetailsnobtn/></td>
      </tr>
      <tr>
        <td colspan="6">
        </td>
      </tr>


      </tbody>
    </table>
  );
}
