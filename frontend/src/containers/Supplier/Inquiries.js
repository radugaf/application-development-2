import React, { useState, useEffect } from "react";
import TableProducts from "../../components/TableProducts.js";
import { Form, Button, Table, Grid, Icon, Modal, Header, Divider, Input } from "semantic-ui-react";

import axios from "axios";

import ITableModalsAccept from "../../components/Table/iTableModalsAccept";
import ITableModalsDecline from "../../components/Table/iTableModalsDecline";
import ITableModalsPartial from "../../components/Table/iTableModalsPartial";

const Inquiries = () => {
  const [enquiry, setEnquiry] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExOTA5MzE5LCJqdGkiOiJiZDg2MDVmMDQ5ZTg0OTFkODY2NzM4ZTUyM2VkZWU4MCIsInVzZXJfaWQiOjF9.V-oLJKAsRYCbon1fm_zUpWYalEFI9QrNykaMNiK_T6E`,
      },
    };

    axios
      .get(`http://localhost:8000/api/v1/enquiry-list/`, config)
      .then((res) => {
        const data = res.data.data;
        setEnquiry(data.Il_Calcio);
      })
      .catch((err) => {});
  }, []);

  // MODAL SETTINGS
  const [open, setOpen] = React.useState(false)
  const [secondOpen, setSecondOpen] = React.useState(false)
  const [thirdOpen, setThirdOpen] = React.useState(false)




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
               <Table.Cell warning textAlign='center' ><Button color='Orange'>Vezi Detalii</Button></Table.Cell>
             </Table.Row>

             <Table.Row>

               <Table.Cell positive colspan='7' textAlign='center' >

                 <Table celled>

                  <Table.Header>

                    <Table.Row>
                      <Table.HeaderCell>Nume Produs</Table.HeaderCell>
                      <Table.HeaderCell>Cantitate Ceruta</Table.HeaderCell>
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
                  <Table.Row>
                    <Table.Cell colspan='6' textAlign='center'>

                      <Modal
                        closeIcon
                        open={open}
                        trigger={<Button color="green">Accepta</Button>}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                      >
                        <Header content='Accepta comanda integral' />
                        <Modal.Content>
                          <p>
                            Esti sigur ca vrei sa accepti comanda integral ?
                          </p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button color='green' onClick={() => setOpen(false)}>
                            <Icon name='remove' /> Da
                          </Button>
                          <Button color='red' onClick={() => setOpen(false)}>
                            <Icon name='checkmark' /> Nu
                          </Button>
                        </Modal.Actions>
                      </Modal>

                      <Modal
                        closeIcon
                        SecondOpen={open}
                        trigger={<Button color="red">Refuza</Button>}
                        onClose={() => setSecondOpen(false)}
                        onOpen={() => setSecondOpen(true)}
                      >
                        <Header content='Refuza comanda integral' />
                        <Modal.Content>
                          <p>
                            Esti sigur ca vrei sa refuzi comanda integral ?
                          </p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button color='green' onClick={() => setSecondOpen(false)}>
                            <Icon name='remove' /> Da
                          </Button>
                          <Button color='red' onClick={() => setSecondOpen(false)}>
                            <Icon name='checkmark' /> Nu
                          </Button>
                        </Modal.Actions>
                      </Modal>


                      <Modal
                        closeIcon
                        thirdOpen={open}
                        trigger={<Button color="orange">Partial</Button>}
                        onClose={() => setThirdOpen(false)}
                        onOpen={() => setThirdOpen(true)}
                      >
                        <Header content='Accepta comanda partial' />
                        <Modal.Content scroll>
                          <>
                          <h2>Nume Produs : Paste Barilla</h2>
                           <p>Cantitate Ceruta : 12 Buc</p>
                           <p>Valoare Buc : 10 Lei</p>
                           <p>Valoare Totala : 120 Lei</p>
                           <Form>
                            <Form.Field>
                              <Input label='Cantitate disponibila' placeholder='ex : 10' />
                            </Form.Field>
                          </Form>
                          <br />
                          <Divider />
                          <br />
                          </>
                          <>
                          <h2>Nume Produs : Paste Barilla</h2>
                           <p>Cantitate Ceruta : 12 Buc</p>
                           <p>Valoare Buc : 10 Lei</p>
                           <p>Valoare Totala : 120 Lei</p>
                           <Form>
                            <Form.Field>
                              <Input label='Cantitate disponibila' placeholder='ex : 10' />
                            </Form.Field>
                          </Form>
                          <br />
                          <Divider />
                          <br />
                          </>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button color='green' onClick={() => setThirdOpen(false)}>
                            <Icon name='remove' /> Da
                          </Button>
                          <Button color='red' onClick={() => setThirdOpen(false)}>
                            <Icon name='checkmark' /> Nu
                          </Button>
                        </Modal.Actions>
                      </Modal>

                    </Table.Cell>
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

export default Inquiries;
