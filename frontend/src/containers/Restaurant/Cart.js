import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Icon,
  Image,
  Header,
  Input,
  Button,
  Divider,
  Table,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import {
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
  GetRestaurantOrder,
  MarkAsDelivery,
  GetInquires,

} from "../../redux/actions/products";
import { URL } from "../../requests";

const Cart = ({
  carts,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
  GetRestaurantOrder,
  pendingOrders,
  MarkAsDelivery,
  user,
  GetInquires,
  inquires
}) => {
  const [formData, setFormData] = useState([]);
  const userType = user;

  useEffect(() => {
    GetAddToCart();
    GetRestaurantOrder();
    GetInquires()
    carts &&
      carts.instant_delivery_items &&
      carts.instant_delivery_items.map((cart) => {
        setFormData([
          {
            product_item_id: cart.product_item_id,
            product_quantity: cart.product_quantity,
          },
        ]);
      });
  }, []);

  const onDeleteCart = async (e, product_item_id) => {
    e.preventDefault();

    await DeleteCart({ product_id: product_item_id });
    GetAddToCart();
    window.location.href = "/cart";

    toastr.success("Cart Product Deleted", "Cart product successfully deleted");
  };

  const UpdateQty = (e, product_item_id, price) => {
    console.log({ value: e.target.value });
    if (+e.target.value >= 1) {
      UpdateCart({
        product_id: product_item_id,
        quantity: +e.target.value,
        price,
      });
      GetAddToCart();
      toastr.success("Cart Qty Update", "Numar produse updated");
    } else {
      toastr.error("Numar produse not less than 1");
    }
  };

  const AddToOrder = (e) => {
    e.preventDefault();
    const product_ids =
      carts &&
      carts.instant_delivery_items &&
      carts.instant_delivery_items.map((cart) => cart.product_item_id);
    console.log({ product_ids });
    PlaceOrder({ product_id: product_ids });
    GetAddToCart();
    toastr.success("Create Order", "Order Created successfully");
  };

  const acceptOrder = async (e, order_id) => {
    e.preventDefault();
    await MarkAsDelivery({ product_id: order_id });
    GetRestaurantOrder();
    toastr.success("Order Delivered", "Order Mark As Delivery successfully");
    window.location.href = "/cart";
  };

  const rejectOrder = (e) => {
    e.preventDefault();
  };

  // TODO:RestaurantDetails
  const nameOfRestaurant = userType && userType.resturant_name
  const restaurantAddress = userType && userType.resturant_address
  return (
    <>
      <Grid columns={2} textAlign="center" divided>
        <Grid.Row width="14">
          <Grid.Column width="10">
            <Grid columns={3} fluid textAlign="left">
              {carts &&
                carts.instant_delivery_items &&
                carts.instant_delivery_items.map((cart) => {
                  const currentQty = formData.filter(
                    (data) => data.product_item_id === cart.product_item_id
                  );

                  const value =
                    (currentQty &&
                      currentQty[0] &&
                      currentQty[0].product_quantity) ||
                    1;

                  return (
                    <Grid.Row>
                      <Grid.Column
                        width="1"
                        textAlign="center"
                        verticalAlign="middle"
                      >
                        <button
                          onClick={(e) => onDeleteCart(e, cart.product_item_id)}
                        >
                          Delete
                        </button>
                      </Grid.Column>
                      <Grid.Column width="2">
                        <Image
                          src={`${URL}${cart.product_image_url}`}
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column width="11" stretched>
                        <p>Nume : {cart.product_title}</p>
                        <p>Cantitate : {cart.product_total_stock}</p>
                        <p>Pret : {cart.product_price}</p>
                        <p>Instant Delivery : Yes</p>
                        <p>Qty: {cart.product_quantity}</p>
                        <Input
                          min={1}
                          label="Numar produse"
                          placeholder="ex: 10"
                          // value={cart.product_quantity}
                          onBlur={(e) => {
                            UpdateQty(
                              e,
                              cart.product_item_id,
                              cart.product_price
                            );
                          }}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  );
                })}
            </Grid>
          </Grid.Column>

          <Grid.Column width="4" textAlign="left" stretched>
            <p>Nume Restaurant : {nameOfRestaurant}</p>
            <p>Adresa Livreare : {restaurantAddress}</p>
            <p>Valoare T.V.A : Valoare.TVA</p>
            <p>Valaore totala comanda : Valoare.Totala</p>
            <Button color="green" onClick={(e) => AddToOrder(e)}>
              Trimite Comanda
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <br />
      <br />
      <br />
      <br />
      <br />
      {/* TODO:if User type Supplier then display */}

      <Divider horizontal>
        <Header as="h4">
          <Icon name="tag" />
          Comenzi in asteptare
        </Header>
      </Divider>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Grid columns={1} textAlign="center" divided>
        <Grid.Row width="14">
          <Grid.Column width="14">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nume Produs</Table.HeaderCell>
                  <Table.HeaderCell>Cantitate Ceruta</Table.HeaderCell>
                  <Table.HeaderCell>Cantitate Oferita</Table.HeaderCell>
                  <Table.HeaderCell>Pret Bucata</Table.HeaderCell>
                  <Table.HeaderCell>Pret Total</Table.HeaderCell>
                  {userType && userType.is_supplier && (
                    <>
                      <Table.HeaderCell>Accepta</Table.HeaderCell>
                      <Table.HeaderCell>Refuza</Table.HeaderCell>
                    </>
                  )}
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {pendingOrders &&
                  pendingOrders.map((pendingOrder) => {
                    if (!pendingOrder.is_delivered) {
                      return (
                        <Table.Row>
                          <Table.Cell positive>
                            {pendingOrder.product_title}
                          </Table.Cell>
                          <Table.Cell positive>
                            {pendingOrder.product_quantity}
                          </Table.Cell>
                          <Table.Cell positive>
                            {pendingOrder.product_quantity}
                          </Table.Cell>
                          <Table.Cell positive>
                            {pendingOrder.product_price}
                          </Table.Cell>
                          {/* TODO:Total */}
                          <Table.Cell positive>50 Lei</Table.Cell>
                          {userType && userType.is_supplier && (
                            <>
                              <Table.Cell textAlign="center">
                                <Button
                                  color="teal"
                                  onClick={(e) =>
                                    acceptOrder(e, pendingOrder.product_item_id)
                                  }
                                >
                                  Accepta
                                </Button>
                              </Table.Cell>
                              <Table.Cell textAlign="center">
                                <Button
                                  color="red"
                                  onClick={(e) => rejectOrder(e)}
                                >
                                  Refuza
                                </Button>
                              </Table.Cell>
                            </>
                          )}
                        </Table.Row>
                      );
                    }
                  })}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>

       <br />
      <br />
      <br />
      <br />
      <br />
      {/* TODO:if User type Supplier then display */}

      <Divider horizontal>
        <Header as="h4">
          <Icon name="tag" />
          Inquires
        </Header>
      </Divider>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Grid columns={1} textAlign="center" divided>
        <Grid.Row width="14">
          <Grid.Column width="14">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nume Produs</Table.HeaderCell>
                  <Table.HeaderCell>Cantitate Ceruta</Table.HeaderCell>
                  <Table.HeaderCell>Cantitate Oferita</Table.HeaderCell>
                  <Table.HeaderCell>Pret Bucata</Table.HeaderCell>
                  <Table.HeaderCell>Pret Total</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {inquires && inquires[nameOfRestaurant] &&
                  inquires[nameOfRestaurant].map((inquire) => {
                   
                      return (
                        <Table.Row>
                          <Table.Cell positive>
                            {inquire.product_title}
                          </Table.Cell>
                          <Table.Cell positive>
                            {inquire.quantity_by_restaurant}
                          </Table.Cell>
                          <Table.Cell positive>
                            {inquire.price_by_restaurant}
                          </Table.Cell>
                          <Table.Cell positive>
                            {inquire.original_price}
                          </Table.Cell>
                          {/* TODO:Total */}
                          <Table.Cell positive>50 Lei</Table.Cell>
                        
                        </Table.Row>
                      );
                    
                  })}
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
    carts: state.products.cartsDetails,
    pendingOrders: state.products.restaurantOrdersDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
  GetRestaurantOrder,
  MarkAsDelivery,
})(Cart);
