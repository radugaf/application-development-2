import React, { useState, useEffect } from "react";
import TableProducts from "../../components/TableProducts.js";
import axios from "axios";
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

import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import { GetSupplierOrder, MarkAsDelivery } from "../../redux/actions/products";
import { URL, CREDENTIALS } from "../../requests";

const Orders = ({ GetSupplierOrder, MarkAsDelivery, orders, user }) => {
  // const [formData, setFormData] = useState({
  //   product_item_id: 0, //here is product id is given by default
  // });

  const userType = user;
  useEffect(() => {
    GetSupplierOrder();
  }, []);

  const acceptOrder = (e, order_id) => {
    e.preventDefault();
    MarkAsDelivery({ product_id: order_id });
    GetSupplierOrder();
    toastr.success("Order Delivered", "Order Mark As Delivery successfully");
    window.location.href = "/orders";
  };

  return (
    <>
      <Grid columns={1} textAlign="center" divided>
        <Grid.Row width="14">
          <Grid.Column width="14">
            <Table celled>
              {userType && userType.is_supplier && (
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
              )}
              {userType && !userType.is_supplier && (
                <Table.Body>
                  {orders &&
                    orders.map((order) => {
                      if (!order.is_delivered) {
                        return (
                          <Table.Row>
                            <Table.Cell warning>
                              {order.product_title}
                            </Table.Cell>
                            <Table.Cell warning></Table.Cell>
                            {/* TODO:Order Value  */}
                            <Table.Cell warning></Table.Cell>
                            <Table.Cell warning></Table.Cell>
                            <Table.Cell warning></Table.Cell>
                            <Table.Cell warning textAlign="center">
                              <Button
                                color="green"
                                onClick={(e) =>
                                  acceptOrder(e, order.product_item_id)
                                }
                              >
                                Accepta
                              </Button>
                            </Table.Cell>
                            <Table.Cell warning textAlign="center">
                              <Button color="red">Refuza</Button>
                            </Table.Cell>
                            <Table.Cell warning textAlign="center">
                              <Button>Vezi Detalii</Button>
                            </Table.Cell>
                          </Table.Row>
                        );
                      }
                    })}

                  <Table.Row>
                    <Table.Cell positive colspan="8" textAlign="center">
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
                          {orders &&
                            orders.map((order) => {
                              if (order.is_delivered) {
                                return (
                                  <Table.Row>
                                    <Table.Cell positive>
                                      {order.product_title}
                                    </Table.Cell>
                                    <Table.Cell positive>
                                      {/* TODO:Amount */}
                                    </Table.Cell>
                                    <Table.Cell positive>
                                      {order.product_price}
                                    </Table.Cell>
                                    <Table.Cell positive></Table.Cell>
                                    {/* TODO:Order Value */}
                                    <Table.Cell positive></Table.Cell>
                                  </Table.Row>
                                );
                              }
                            })}
                        </Table.Body>
                      </Table>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row></Table.Row>
                </Table.Body>
              )}
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.products.cartsDetails,
    orders: state.products.supplierOrdersDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  GetSupplierOrder,
  MarkAsDelivery,
})(Orders);
