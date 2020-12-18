import React, { useState, useEffect } from "react";
import { Grid, Card, Icon, Image, Header, Input, Button, Divider, Table } from "semantic-ui-react";
import axios from "axios";

const Cart = () => {
  const [cartproducts, setCartproducts] = useState([]);
  const [formData, setFormData] = useState({
    product_item_id: 0,
  });


  const { product_item_id } = formData;

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExOTA5MzE5LCJqdGkiOiJiZDg2MDVmMDQ5ZTg0OTFkODY2NzM4ZTUyM2VkZWU4MCIsInVzZXJfaWQiOjF9.V-oLJKAsRYCbon1fm_zUpWYalEFI9QrNykaMNiK_T6E`,
      },
    };

    axios
      .get(`http://localhost:8000/api/v1/product-list-in-cart/`, config)
      .then((res) => {
        const data = res.data.data;
        setCartproducts(data.instant_delivery_items);
        // console.log("res.data========>", res.data.data.instant_delivery_items);

        // console.log("cartproducts=========>", cartproducts);
      })
      .catch((err) => {});
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExOTA5MzE5LCJqdGkiOiJiZDg2MDVmMDQ5ZTg0OTFkODY2NzM4ZTUyM2VkZWU4MCIsInVzZXJfaWQiOjF9.V-oLJKAsRYCbon1fm_zUpWYalEFI9QrNykaMNiK_T6E`,
      },
    };

    axios
      .post(
        "http://localhost:8000/api/v1/remove-product-in-cart/",
        {
          product_item_id,
        },
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <>
      <Grid columns={2} textAlign='center' divided>
        <Grid.Row width='14'>


          <Grid.Column width="10" >

            <Grid columns={3} fluid textAlign='left'>
              <Grid.Row>
                <Grid.Column width="1" textAlign='center' verticalAlign='middle'>
                  <a href='#'>Delete</a>
                </Grid.Column>
                <Grid.Column width="2">
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>
                </Grid.Column>
                <Grid.Column width="11" stretched>
                  <p>Nume : Nume.produs</p>
                  <p>Cantitate : Cantitate.furnizor.maxima</p>
                  <p>Pret : Pret.Produs</p>
                  <p>Instant Delivery : Instant.Delivery.True</p>
                  <Input label='Numar produse' placeholder='ex: 10'/>
                </Grid.Column>
              </Grid.Row>


              <Grid.Row>
                <Grid.Column width="1" textAlign='center' verticalAlign='middle'>
                  <a href='#'>Delete</a>
                </Grid.Column>
                <Grid.Column width="2" >
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                </Grid.Column>
                <Grid.Column width="11" stretched>
                  <p>Nume : Nume.produs</p>
                  <p>Cantitate : Cantitate.furnizor.maxima</p>
                  <p>Pret : Pret.Produs</p>
                  <p>Instant Delivery : Instant.Delivery.True</p>
                  <Input label='Numar produse' placeholder='ex: 10'/>
                </Grid.Column>
              </Grid.Row>


            </Grid>

          </Grid.Column>


          <Grid.Column width='4' textAlign='left' stretched>
            <p>Nume Restaurant : Nume.restaurant</p>
            <p>Adresa Livreare : Adresa.Livrare</p>
            <p>Valoare T.V.A : Valoare.TVA</p>
            <p>Valaore totala comanda : Valoare.Totala</p>
            <Button color='green'>Trimite Comanda</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Divider horizontal>
      <Header as='h4'>
        <Icon name='tag' />
        Comenzi in asteptare
      </Header>
    </Divider>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>



    <Grid columns={1} textAlign='center' divided>
      <Grid.Row width='14'>
        <Grid.Column width="14" >

          <Table celled>
           <Table.Header>
             <Table.Row>
               <Table.HeaderCell>Nume Produs</Table.HeaderCell>
               <Table.HeaderCell>Cantitate Ceruta</Table.HeaderCell>
               <Table.HeaderCell>Cantitate Oferita</Table.HeaderCell>
               <Table.HeaderCell>Pret Bucata</Table.HeaderCell>
               <Table.HeaderCell>Pret Total</Table.HeaderCell>
               <Table.HeaderCell>Accepta</Table.HeaderCell>
               <Table.HeaderCell>Refuza</Table.HeaderCell>
             </Table.Row>
           </Table.Header>

           <Table.Body>
             <Table.Row>
               <Table.Cell positive>Paste Barilla</Table.Cell>
               <Table.Cell positive>12 KG</Table.Cell>
               <Table.Cell positive>5 KG</Table.Cell>
               <Table.Cell positive>10 Lei</Table.Cell>
               <Table.Cell positive>50 Lei</Table.Cell>
               <Table.Cell textAlign='center' ><Button color='teal'>Accepta</Button></Table.Cell>
               <Table.Cell textAlign='center' ><Button color='red'>Refuza</Button></Table.Cell>
             </Table.Row>

             <Table.Row>
               <Table.Cell positive>Paste Barilla</Table.Cell>
               <Table.Cell positive>12 KG</Table.Cell>
               <Table.Cell positive>5 KG</Table.Cell>
               <Table.Cell positive>10 Lei</Table.Cell>
               <Table.Cell positive>50 Lei</Table.Cell>
               <Table.Cell textAlign='center' ><Button color='teal'>Accepta</Button></Table.Cell>
               <Table.Cell textAlign='center' ><Button color='red'>Refuza</Button></Table.Cell>
             </Table.Row>

             <Table.Row>
               <Table.Cell positive>Paste Barilla</Table.Cell>
               <Table.Cell positive>12 KG</Table.Cell>
               <Table.Cell positive>5 KG</Table.Cell>
               <Table.Cell positive>10 Lei</Table.Cell>
               <Table.Cell positive>50 Lei</Table.Cell>
               <Table.Cell textAlign='center' ><Button color='teal'>Accepta</Button></Table.Cell>
               <Table.Cell textAlign='center' ><Button color='red'>Refuza</Button></Table.Cell>
             </Table.Row>

             <Table.Row>
               <Table.Cell positive>Paste Barilla</Table.Cell>
               <Table.Cell positive>12 KG</Table.Cell>
               <Table.Cell positive>5 KG</Table.Cell>
               <Table.Cell positive>10 Lei</Table.Cell>
               <Table.Cell positive>50 Lei</Table.Cell>
               <Table.Cell textAlign='center' ><Button color='teal'>Accepta</Button></Table.Cell>
               <Table.Cell textAlign='center' ><Button color='red'>Refuza</Button></Table.Cell>
             </Table.Row>
           </Table.Body>
         </Table>


        </Grid.Column>
      </Grid.Row>
    </Grid>
    </>
  );
};
export default Cart;
