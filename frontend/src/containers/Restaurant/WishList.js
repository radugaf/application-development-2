import React, { Component } from "react";

import { Form, Button } from "semantic-ui-react";

class WishList extends Component {
  render() {
    return (
      <>
        <div className="white-card">
          <h1>Cart and stuff</h1>
          <hr />
          <br />

          <Form className="form-control">
            <Form.Field>
              <span className="cart-product-name">
                Paste Barilla Bune de tot
              </span>
              <span>Cantitate: 10 Buc</span>
              <Form.Input
                className="cart-quantity-form"
                fluid
                label="Cantitate Dorita"
                placeholder="Din 100 disponibile"
              />
              <Form.Input
                className="cart-quantity-form"
                fluid
                label="Pret pe bucata"
                placeholder="Pret"
              />
              <span>Pret bucata : 10 ron</span> <br />
            </Form.Field>
            <Button color="olive">Cere Oferta</Button>
          </Form>
        </div>
      </>
    );
  }
}

export default WishList;
