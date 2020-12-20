import React, { useState, useEffect } from "react";
import TableProducts from "../../components/TableProducts.js";
import {
  Form,
  Button,
  Table,
  Grid,
  Icon,
  Modal,
  Header,
  Divider,
  Input,
} from "semantic-ui-react";

import ITableModalsAccept from "../../components/Table/iTableModalsAccept";
import ITableModalsDecline from "../../components/Table/iTableModalsDecline";
import ITableModalsPartial from "../../components/Table/iTableModalsPartial";

import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import {
  GetInquires,
  DeclineInquiry,
  UpdateInquiry,
} from "../../redux/actions/products";

const Inquiries = ({
  inquires,
  GetInquires,
  UpdateInquiry,
  DeclineInquiry,
}) => {
  useEffect(() => {
    GetInquires();
  }, []);

  // MODAL SETTINGS
  const [open, setOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [thirdOpen, setThirdOpen] = React.useState(false);
  const [currentInquire, setCurrentInquire] = React.useState();
  const [currentQty, setCurrentQty] = React.useState();

  const restaurantName = "Restaurant 1";

  const onReject = (e) => {
    e.preventDefault();
    DeclineInquiry({
      product_id: currentInquire.product_item_id,
      inquiry_id: currentInquire.enquiry_id,
    });
    GetInquires();
    toastr.success("Reject Inquire", "Inquire Reject Successfully");
    setCurrentInquire();
    setSecondOpen(false);
    GetInquires();
    window.location.href = "/inquiries";
  };

  const onUpdate = (e) => {
    UpdateInquiry({
      product_id: currentInquire.product_item_id,
      inquiry_id: currentInquire.enquiry_id,
      price: currentInquire.original_price,
      quantity: currentQty,
    });
    GetInquires();
    toastr.success("Accept Inquire", "Inquire Accept Successfully");

    setCurrentQty();
    setCurrentInquire();
    setThirdOpen(false);
    window.location.href = "/inquiries";
  };

  return (
    <>
      <Grid columns={1} textAlign="center" divided>
        <Grid.Row width="14">
          <Grid.Column width="14">
            <Table celled>
              {/* TODO:Remaning Parameter */}
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
                  <Table.Cell warning textAlign="center">
                    <Button color="Orange">Vezi Detalii</Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell positive colspan="7" textAlign="center">
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
                        {inquires &&
                          inquires[restaurantName] &&
                          inquires[restaurantName].map((inquire) => (
                            <>
                              <Table.Row>
                                <Table.Cell positive>Paste Barilla</Table.Cell>
                                <Table.Cell positive>
                                  {inquire.quantity_by_restaurant}
                                </Table.Cell>
                                <Table.Cell positive>
                                  {inquire.price_by_restaurant}
                                </Table.Cell>
                                <Table.Cell positive>10 Lei</Table.Cell>
                                <Table.Cell positive>50 Lei</Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell colspan="6" textAlign="center">
                                  <Modal
                                    closeIcon
                                    open={open}
                                    trigger={
                                      <Button color="green">Accepta</Button>
                                    }
                                    onClose={() => {
                                      setCurrentInquire();
                                      setOpen(false);
                                    }}
                                    onOpen={() => {
                                      setCurrentInquire(inquire);
                                      setOpen(true);
                                    }}
                                  >
                                    <Header content="Accepta comanda integral" />
                                    <Modal.Content>
                                      <p>
                                        Esti sigur ca vrei sa accepti comanda
                                        integral ?
                                      </p>
                                    </Modal.Content>
                                    <Modal.Actions>
                                      <Button
                                        color="green"
                                        onClick={() => {
                                          setCurrentInquire();
                                          setOpen(false);
                                        }}
                                      >
                                        <Icon name="remove" /> Da
                                      </Button>
                                      <Button
                                        color="red"
                                        onClick={() => {
                                          setCurrentInquire();
                                          setOpen(false);
                                        }}
                                      >
                                        <Icon name="checkmark" /> Nu
                                      </Button>
                                    </Modal.Actions>
                                  </Modal>

                                  <Modal
                                    closeIcon
                                    SecondOpen={open}
                                    trigger={
                                      <Button color="red">Refuza</Button>
                                    }
                                    onClose={() => {
                                      setCurrentInquire();
                                      setSecondOpen(false);
                                    }}
                                    onOpen={(e) => {
                                      setCurrentInquire(inquire);
                                      setSecondOpen(true);
                                    }}
                                  >
                                    <Header content="Refuza comanda integral" />
                                    <Modal.Content>
                                      <p>
                                        Esti sigur ca vrei sa refuzi comanda
                                        integral ?
                                      </p>
                                    </Modal.Content>
                                    <Modal.Actions>
                                      <Button
                                        color="green"
                                        onClick={(e) => onReject(e)}
                                      >
                                        <Icon name="remove" /> Da
                                      </Button>
                                      <Button
                                        color="red"
                                        onClick={() => {
                                          setCurrentInquire();
                                          setSecondOpen(false);
                                        }}
                                      >
                                        <Icon name="checkmark" /> Nu
                                      </Button>
                                    </Modal.Actions>
                                  </Modal>

                                  <Modal
                                    closeIcon
                                    thirdOpen={open}
                                    trigger={
                                      <Button color="orange">Partial</Button>
                                    }
                                    onClose={() => {
                                      setCurrentInquire();
                                      setThirdOpen(false);
                                    }}
                                    onOpen={() => {
                                      setCurrentInquire(inquire);
                                      setThirdOpen(true);
                                    }}
                                  >
                                    <Header content="Accepta comanda partial" />
                                    <Modal.Content scroll>
                                      <>
                                        <h2>Nume Produs : </h2>
                                        <p>
                                          Cantitate Ceruta :
                                          {inquire.quantity_by_restaurant}
                                        </p>
                                        <p>Valoare Buc : 10 Lei</p>
                                        <p>Valoare Totala : 120 Lei</p>
                                        <Form>
                                          <Form.Field>
                                            <Input
                                              label="Cantitate disponibila"
                                              placeholder="ex : 10"
                                              onBlur={(e) =>
                                                setCurrentQty(+e.target.value)
                                              }
                                            />
                                          </Form.Field>
                                        </Form>
                                        <br />
                                        <Divider />
                                        <br />
                                      </>
                                      {/* <>
                                        <h2>Nume Produs : Paste Barilla</h2>
                                        <p>Cantitate Ceruta : 12 Buc</p>
                                        <p>Valoare Buc : 10 Lei</p>
                                        <p>Valoare Totala : 120 Lei</p>
                                        <Form>
                                          <Form.Field>
                                            <Input
                                              label="Cantitate disponibila"
                                              placeholder="ex : 10"
                                            />
                                          </Form.Field>
                                        </Form>
                                        <br />
                                        <Divider />
                                        <br />
                                      </>
                                     */}
                                    </Modal.Content>
                                    <Modal.Actions>
                                      <Button
                                        color="green"
                                        onClick={(e) => onUpdate(e)}
                                      >
                                        <Icon name="remove" /> Da
                                      </Button>
                                      <Button
                                        color="red"
                                        onClick={() => {
                                          setCurrentQty();
                                          setCurrentInquire();
                                          setThirdOpen(false);
                                        }}
                                      >
                                        <Icon name="checkmark" /> Nu
                                      </Button>
                                    </Modal.Actions>
                                  </Modal>
                                </Table.Cell>
                              </Table.Row>
                            </>
                          ))}
                      </Table.Body>
                    </Table>
                  </Table.Cell>
                </Table.Row>

                <Table.Row></Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    inquires: state.products.inquiredDetails,
  };
};

export default connect(mapStateToProps, {
  GetInquires,
  DeclineInquiry,
  UpdateInquiry,
})(Inquiries);
