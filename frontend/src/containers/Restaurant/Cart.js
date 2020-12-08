import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class Cart extends Component {
  render() {
    return (
      <>
        <h1>Available for instant delivery</h1>
        <br />
        <Form>
          <Form.Field>
            <span>Nume Produs</span>
            <Form.Input
              fluid
              label="Cantitate Dorita"
              placeholder="Din 100 disponibile"
            />
            <span>Pret bucata : 10 ron</span> <br />
            <span>Pret Total : 1000 ron</span> <br />
            <Button color="olive">Trimite Comanda</Button>
          </Form.Field>
        </Form>
        <br />

        <br />
        <Form>
          <Form.Field>
            <span>Nume Produs</span>
            <Form.Input
              fluid
              label="Cantitate Dorita"
              placeholder="Din 100 disponibile"
            />
            <span>Pret bucata : 10 ron</span> <br />
            <span>Pret Total : 1000 ron</span> <br />
            <Button color="olive">Trimite Comanda</Button>
          </Form.Field>
        </Form>
        <br />

        <hr />

        <br />

        <h1>Not Available for instant delivery</h1>
        <br />
        
      </>
    );
  }
}
export default Cart;

// Curatare navigation. Meniul trebuie sa fie: Home, Cart, Wishlist, Enquiries (sau Inquiries), Products.
// La products trebuie sa fie: Create, Update, Delete (irelevant cine este user-ul)
// Wish List este pentru produsele care au instant_del = False
// Cart este pentru produsele cu Instant_delivery = True SAU cu produsele care au enquiry_finished = True
// nquiries
