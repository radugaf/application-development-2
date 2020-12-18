import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Image, Input, Divider, Button } from "semantic-ui-react";


const WishList = () => {
  const [wishList, setWishList] = useState([]);

  const [formData, setFormData] = useState({
    product_item_id: 0,
    quantity: 0,
    price: 0,
  });

  const { product_item_id, quantity, price } = formData;

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
        setWishList(data.not_instant_delivery_items);
        console.log(
          "res.data========>",
          res.data.data.not_instant_delivery_items
        );

        console.log("wishList=========>", wishList);
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

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExOTA5MzE5LCJqdGkiOiJiZDg2MDVmMDQ5ZTg0OTFkODY2NzM4ZTUyM2VkZWU4MCIsInVzZXJfaWQiOjF9.V-oLJKAsRYCbon1fm_zUpWYalEFI9QrNykaMNiK_T6E`,
      },
    };

    axios
      .post(
        "http://localhost:8000/api/v1/update-product-in-cart/",
        {
          product_item_id,
          quantity,
          price,
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
    <Grid columns={1} textAlign='center'>
      <Grid.Row>
        <Grid.Column width="14">
            <Grid columns={3} textAlign='left'>
              <Grid.Row>
                <Grid.Column width="1" textAlign='center' verticalAlign='middle' >
                  <a href='#'>Delete</a>
                </Grid.Column>
                <Grid.Column width="2" >
                  <Image src='https://s13emagst.akamaized.net/products/697/696129/images/res_e87ca3516174a17de027ee3575fe4d42.jpg' size='medium' />
                </Grid.Column>
                <Grid.Column width="13" stretched>
                  <p>Nume : Nume.produs</p>
                  <p>Cantitate : Cantitate.furnizor.maxima</p>
                  <p>Pret : Pret.Produs</p>
                  <p>Instant Delivery : Instant.Delivery.False</p>
                  <Input label='Cantitate dorita' placeholder='10 Buc' />
                  <br/>
                  <Button color="orange">Cere Oferta</Button>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  <Divider/>
                </Grid.Column>
              </Grid.Row>


              <Grid.Row>
                <Grid.Column width="1" textAlign='center' verticalAlign='middle' >
                  <a href='#'>Delete</a>
                </Grid.Column>
                <Grid.Column width="2" >
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' />
                </Grid.Column>
                <Grid.Column width="13" stretched>
                  <p>Nume : Nume.produs</p>
                  <p>Cantitate : Cantitate.furnizor.maxima</p>
                  <p>Pret : Pret.Produs</p>
                  <p>Instant Delivery : Instant.Delivery.False</p>
                  <Input label='Cantitate dorita' placeholder='10 Buc' />
                  <br/>
                  <Button color="orange">Cere Oferta</Button>
                </Grid.Column>
              </Grid.Row>



            </Grid>
          </Grid.Column>
      </Grid.Row>
    </Grid>
    </>
  );
};

export default WishList;
