import React from "react";

export default function DataTableListDetails({ data }) {

  const columns = data[0] && Object.keys(data[0]);

  return (
    <table className="main-text-color comenziPrimiteTableHead">
      <tr>
        <th>Produs</th>
        <th>Pret fara T.V.A</th>
        <th>Data comanda</th>
        <th>Cantitate</th>
        <th>Valoare T.V.A</th>
        <th>Pret Total</th>
      </tr>
      {data.map(row => <tr>
        {
          columns.map(column => <td>{row[column]}</td>)
          }
      </tr>)}
      <tbody class="tbody">
      <tr>
        <td>Paste fainoase</td>
        <td>120 Lei</td>
        <td>12.08.2020</td>
        <td class="green">100 KG</td>
        <td>450 Lei</td>
        <td>190 Lei</td>
      </tr>
      <tr>
      </tr>
      <tr>
        <td>Lapte UHT</td>
        <td>200 Lei</td>
        <td>16.08.2020</td>
        <td class="red">20 L</td>
        <td>123 Lei</td>
        <td>500 Lei</td>
      </tr>
      <tr>
        <td>Blat Pizza</td>
        <td>150 Lei</td>
        <td>31.01.2020</td>
        <td class="darkblue">15 KG</td>
        <td>312 Lei</td>
        <td>280 Lei</td>
      </tr>
      <tr>
        <td>Suc rece</td>
        <td>300 Lei</td>
        <td>21.05.2020</td>
        <td class="orange">202 L</td>
        <td>321 Lei</td>
        <td>603 Lei </td>
      </tr>
</tbody>
    </table>
  );
}
