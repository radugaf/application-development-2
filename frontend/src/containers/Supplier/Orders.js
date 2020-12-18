import React, { useState, useEffect } from "react";
import TableProducts from "../../components/TableProducts.js";
import axios from "axios";
import { Form, Button, Table, Grid, Icon, Modal, Header, Divider, Input } from "semantic-ui-react";

const Orders = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    product_item_id: 0, //here is product id is given by default
  });

  const { product_item_id } = formData;

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExOTA5MzE5LCJqdGkiOiJiZDg2MDVmMDQ5ZTg0OTFkODY2NzM4ZTUyM2VkZWU4MCIsInVzZXJfaWQiOjF9.V-oLJKAsRYCbon1fm_zUpWYalEFI9QrNykaMNiK_T6E`,
      },
    };

    axios
      .get(
        `http://localhost:8000/api/v1/supplier-pending-product-list/`,
        config
      )
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
    <Grid columns={1} textAlign='center' divided>
      <Grid.Row width='14'>
        <Grid.Column width="14" >



          <Table celled>

           <Table.Header>
             <Table.Row>
               <Table.HeaderCell>Nume restaurant</Table.HeaderCell>
               <Table.HeaderCell>Data Comanda</Table.HeaderCell>
               <Table.HeaderCell>Valoare Comanda</Table.HeaderCell>
               <Table.HeaderCell>Timp ramas</Table.HeaderCell>
               <Table.HeaderCell>Valoare T.V.A</Table.HeaderCell>
               <Table.HeaderCell>Accepta Comanda</Table.HeaderCell>
               <Table.HeaderCell>Refuza Comanda</Table.HeaderCell>
               <Table.HeaderCell>Vezi Comanda</Table.HeaderCell>
             </Table.Row>
           </Table.Header>

           <Table.Body>

             <Table.Row>
               <Table.Cell warning>Edesia</Table.Cell>
               <Table.Cell warning>12.02.2020</Table.Cell>
               <Table.Cell warning>450 Ron</Table.Cell>
               <Table.Cell warning>4 Ore</Table.Cell>
               <Table.Cell warning>100 Ron</Table.Cell>
               <Table.Cell warning textAlign='center' ><Button color='green'>Accepta</Button></Table.Cell>
               <Table.Cell warning textAlign='center' ><Button color='red'>Refuza</Button></Table.Cell>
               <Table.Cell warning textAlign='center' ><Button>Vezi Detalii</Button></Table.Cell>
             </Table.Row>

             <Table.Row>

               <Table.Cell positive colspan='8' textAlign='center' >

                 <Table celled>

                  <Table.Header>

                    <Table.Row>
                      <Table.HeaderCell>Nume Produs</Table.HeaderCell>
                      <Table.HeaderCell>Cantitate</Table.HeaderCell>
                      <Table.HeaderCell>Pret Buc</Table.HeaderCell>
                      <Table.HeaderCell>Valoare TVA</Table.HeaderCell>
                      <Table.HeaderCell>Valoare Comanda</Table.HeaderCell>
                    </Table.Row>

                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell positive>Paste Barilla</Table.Cell>
                      <Table.Cell positive>12 KG</Table.Cell>
                      <Table.Cell positive>5 KG</Table.Cell>
                      <Table.Cell positive>10 Lei</Table.Cell>
                      <Table.Cell positive>50 Lei</Table.Cell>
                    </Table.Row>
                </Table.Body>
              </Table>





              </Table.Cell>
             </Table.Row>
             <Table.Row>
             </Table.Row>


           </Table.Body>
         </Table>



        </Grid.Column>
      </Grid.Row>
    </Grid>
    </>
  );
};

export default Orders;
