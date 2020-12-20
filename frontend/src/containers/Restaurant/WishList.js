import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Image, Input, Divider, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import {
  SetToken,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  AddInquiry,
} from "../../redux/actions/products";
import { URL, CREDENTIALS } from "../../requests";

const WishList = ({
  carts,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  SetToken,
  AddInquiry,
}) => {
  useEffect(() => {
    GetAddToCart();
  }, []);

  const onDeleteCart = async (e, product_item_id) => {
    await DeleteCart({ product_id: product_item_id });
    GetAddToCart();
    toastr.success(
      "Wishlist Product Deleted",
      "Wishlist product successfully deleted"
    );
    window.location.href = "/wishlist";
  };

  const UpdateQty = async (e, product_item_id, price) => {
    console.log({ value: e.target.value });
    if (+e.target.value >= 1) {
      await UpdateCart({
        product_id: product_item_id,
        quantity: +e.target.value,
        price,
      });
      GetAddToCart();
      // window.location.href = "/wishlist";
      toastr.success("WishList Qty Update", "Cantitate dorita updated");
    } else {
      toastr.error("Cantitate dorita not less than 1");
    }
  };

  const onFormSubmit = (e, product_items_id) => {
    e.preventDefault();
    AddInquiry({ product_id: [product_items_id] });
    toastr.success("Add Product in Inquiries", "Product added successfully");
  };

  return (
    <>
      <Grid columns={1} textAlign="center">
        <Grid.Row>
          <Grid.Column width="14">
            <Grid columns={3} textAlign="left">
              {carts &&
                carts.not_instant_delivery_items &&
                carts.not_instant_delivery_items.map((cart) => (
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
                        size="medium"
                      />
                    </Grid.Column>
                    <Grid.Column width="13" stretched>
                      <p>Nume : {cart.product_title}</p>
                      <p>Cantitate : {cart.product_total_stock || ""}</p>
                      <p>Pret : {cart.product_original_price}</p>
                      <p>Instant Delivery : No</p>
                      <p>Qty: {cart.product_quantity}</p>
                      <p>Editable : {cart.is_editable ? "Yes" : "No"}</p>

                      <Input
                        disabled={!cart.is_editable}
                        label="Cantitate dorita"
                        placeholder="10 Buc"
                        onBlur={(e) => {
                          UpdateQty(
                            e,
                            cart.product_item_id,
                            cart.product_price
                          );
                        }}
                      />
                      <br />
                      <Button
                        color="orange"
                        onClick={(e) => onFormSubmit(e, cart.product_item_id)}
                      >
                        Cere Oferta
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                ))}

              {/* <Grid.Row>
                <Grid.Column width={16}>
                  <Divider />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column
                  width="1"
                  textAlign="center"
                  verticalAlign="middle"
                >
                  <a href="#">Delete</a>
                </Grid.Column>
                <Grid.Column width="2">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="medium"
                  />
                </Grid.Column>
                <Grid.Column width="13" stretched>
                  <p>Nume : Nume.produs</p>
                  <p>Cantitate : Cantitate.furnizor.maxima</p>
                  <p>Pret : Pret.Produs</p>
                  <p>Instant Delivery : Instant.Delivery.False</p>
                  <Input label="Cantitate dorita" placeholder="10 Buc" />
                  <br />
                  <Button color="orange">Cere Oferta</Button>
                </Grid.Column>
              </Grid.Row>
             */}
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.products.cartsDetails,
  };
};

export default connect(mapStateToProps, {
  GetAddToCart,
  SetToken,
  DeleteCart,
  UpdateCart,
  AddInquiry,
})(WishList);
