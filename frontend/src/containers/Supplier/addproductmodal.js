import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextArea,
  Input,
  Modal,
  Form,
  Checkbox,
} from "semantic-ui-react";

const Addproductmodal = () => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    total_stock: 0,
    price: "",
    instant_delivery: "False",
  });

  const { title, description, price, total_stock, instant_delivery } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
        "http://localhost:8000/api/v1/product-create/",
        {
          title,
          description,
          price,
          total_stock,
          instant_delivery,
        },
        config
      )
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="teal">Adauga Produs</Button>}
    >
      <Modal.Header>Adauga un produs</Modal.Header>
      <Modal.Content>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Field
            label="Title"
            control={Input}
            placeholder="Titlu"
            onChange={(e) => onChange(e)}
            value={title}
            name="title"
          />

          <Form.Field
            label="Descriere Produs"
            control={TextArea}
            placeholder="Descriere"
            onChange={(e) => onChange(e)}
            value={description}
            name="description"
          />
          <Form.Field
            label="Stoc ?"
            control={Input}
            placeholder="Stoc Total"
            onChange={(e) => onChange(e)}
            value={total_stock}
            name="total_stock"
          />
          <Form.Field
            label="pret"
            control={Input}
            placeholder="Pret"
            onChange={(e) => onChange(e)}
            value={price}
            name="price"
          />

          <Form.Field>
            <Checkbox
              label="Instant Delivery"
              onChange={(e) => onChange(e)}
              value={instant_delivery}
              name="instant_delivery"
            />
          </Form.Field>
          <Button color="green">Salveaza</Button>
          <Button color="red" onClick={() => setOpen(false)}>
            Nu Salva
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default Addproductmodal;
