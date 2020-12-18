import React, { useState, useEffect } from "react";
import { Grid, Card, Image, Button } from "semantic-ui-react";
import axios from "axios";
import { connect } from "react-redux";

import Addproductmodal from "./addproductmodal.js";
import {
  ProductFetch,
  AddToCart,
  SetToken,
} from "../../redux/actions/products";
import TableProducts from "../../components/TableProducts.js";
import { URL } from "../../requests";

const ProductsPage = ({ ProductFetch, AddToCart, SetToken, products }) => {
  // const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    product_id: 0, //here is product id is given by default
  });

  const { product_id } = formData;

  useEffect(() => {
    SetToken({ username: "rest", password: "Shreeji@1" });
    ProductFetch();
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    AddToCart({ product_id });
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExOTA5MzE5LCJqdGkiOiJiZDg2MDVmMDQ5ZTg0OTFkODY2NzM4ZTUyM2VkZWU4MCIsInVzZXJfaWQiOjF9.V-oLJKAsRYCbon1fm_zUpWYalEFI9QrNykaMNiK_T6E`,
    //   },
    // };

    // axios
    //   .post(
    //     "http://localhost:8000/api/v1/add-product-in-cart/",
    //     {
    //       product_id,
    //     },
    //     config
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  console.log({ products });
  return (
    <Grid columns={1} textAlign="center">
      <Grid.Row>
        <Grid.Column width="14">
          <Grid columns={4}>
            <Grid.Row>
              {products &&
                products.map((product) => (
                  <Grid.Column width="4">
                    <Card fluid className="border-box">
                      <Grid columns={2}>
                        <Grid.Row>
                          <Grid.Column
                            width="6"
                            className="text-break"
                            verticalAlign="middle"
                          >
                            <Image
                              src={`${URL}${product.image_main}`}
                              size="small"
                            />
                          </Grid.Column>
                          <Grid.Column
                            width="10"
                            className="text-break padding10"
                            textAlign="left"
                          >
                            <p>Nume : {product.title}</p>
                            <p>Cantitate : {product.total_stock}</p>
                            <p>Pret : {product.price}</p>
                            <p>
                              Instant Delivery :{" "}
                              {product.instant_delivery ? "Yes" : "No"}
                            </p>

                            {product.instant_delivery ? (
                              <Button
                                color="teal"
                                onClick={(e) => {
                                  setFormData({
                                    ...formData,
                                    product_id: product.id,
                                  });
                                  onSubmit(e);
                                }}
                              >
                                Adauga in Cos
                              </Button>
                            ) : (
                              <Button color="orange">Adauga in Wishlist</Button>
                            )}
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card>
                  </Grid.Column>
                ))}

              {/* <Grid.Column width="4">
                <Card fluid className="border-box">
                  <Grid columns={2}>
                    <Grid.Row>
                      <Grid.Column
                        width="6"
                        className="text-break"
                        verticalAlign="middle"
                      >
                        <Image
                          src="https://react.semantic-ui.com/images/wireframe/image.png"
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column
                        width="10"
                        className="text-break padding10"
                        textAlign="left"
                      >
                        <p>Nume : Nume.produs</p>
                        <p>Cantitate : Cantitate.furnizor.maxima</p>
                        <p>Pret : Pret.Produs</p>
                        <p>Instant Delivery : Instant.Delivery.False</p>
                        <Button color="orange">Adauga in Wishlist</Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card>
              </Grid.Column>
              <Grid.Column width="4">
                <Card fluid className="border-box">
                  <Grid columns={2}>
                    <Grid.Row>
                      <Grid.Column
                        width="6"
                        className="text-break"
                        verticalAlign="middle"
                      >
                        <Image
                          src="https://react.semantic-ui.com/images/wireframe/image.png"
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column
                        width="10"
                        className="text-break padding10"
                        textAlign="left"
                      >
                        <p>Nume : Nume.produs</p>
                        <p>Cantitate : Cantitate.furnizor.maxima</p>
                        <p>Pret : Pret.Produs</p>
                        <p>Instant Delivery : Instant.Delivery.True</p>
                        <Button color="teal">Adauga in Cos</Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card>
              </Grid.Column>
              <Grid.Column width="4">
                <Card fluid className="border-box">
                  <Grid columns={2}>
                    <Grid.Row>
                      <Grid.Column
                        width="6"
                        className="text-break"
                        verticalAlign="middle"
                      >
                        <Image
                          src="https://react.semantic-ui.com/images/wireframe/image.png"
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column
                        width="10"
                        className="text-break padding10"
                        textAlign="left"
                      >
                        <p>Nume : Nume.produs</p>
                        <p>Cantitate : Cantitate.furnizor.maxima</p>
                        <p>Pret : Pret.Produs</p>
                        <p>Instant Delivery : Instant.Delivery.False</p>
                        <Button color="orange">Adauga in Wishlist</Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card>
              </Grid.Column>
             */}
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.productsDetails,
  };
};
export default connect(mapStateToProps, {
  ProductFetch,
  AddToCart,
  SetToken,
})(ProductsPage);
