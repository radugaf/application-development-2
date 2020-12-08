import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class WishList extends Component {
  render() {
    return (
      <div className="ui justified container">
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
            <Button color="olive">Intreaba disponibilitatea</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default WishList;
