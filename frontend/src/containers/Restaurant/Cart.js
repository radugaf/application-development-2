import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import Logo from "../../assets/img/logo.png";
import NavBar from "../../components/Navbar";

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
      <NavBar />

      <div className="content-wrapper-column">
        <div className="card-row padding-15 page-name-wrapper">
          <span class="page-name color-orange">
            <i class="fas fa-shopping-cart margin-right-10 color-orange"></i>
            CART
          </span>
          <a href="/"className="color-orange">
            <i class="fas fa-chevron-left color-orange"></i>Back to website
          </a>
        </div>

        <form>
          <div className="cart-product-container margin-top-25">
            <div className="width100">
              <div className="cart-product-wrapper card-row padding-15">
                <span>Supplier 1</span>
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
                      <div className="cart-page-product-container margin-top-25">
                        <div className="cart-page-product-details">
                          <div>
                            <input type="checkbox"></input>
                          </div>
                          <img src={`${URL}${cart.product_image_url}`}></img>
                          <div className="cart-page-product-name-id">
                            <span className="cart-page-product-name">
                              {cart.product_title}
                            </span>
                            <span className="cart-page-product-id">
                              Stoc maxim : {cart.product_total_stock}
                            </span>
                          </div>
                          <div className="cart-page-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <div>
                            <span>Cantiate dorita :</span>
                            <input
                              type="value"
                              className="cart-page-cantitate-dorita"
                              min={1}
                              max={cart.product_total_stock}
                              label="Numar produse"
                              onBlur={(e) => {
                                UpdateQty(
                                  e,
                                  cart.product_item_id,
                                  cart.product_price
                                );
                              }}
                            />{" "}
                            / {cart.product_total_stock}
                          </div>
                          <span>Pret Buc: {cart.product_price} Ron </span>
                        </div>
                        <i
                          class="far fa-times color-red"
                          onClick={(e) => onDeleteCart(e, cart.product_item_id)}
                        ></i>
                      </div>
                    );
                  })}
              </div>

              <div className="cart-product-wrapper card-row padding-15 margin-top-25">
                <span>Supplier 2</span>
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
                      <div className="cart-page-product-container margin-top-25">
                        <div className="cart-page-product-details">
                          <div>
                            <input type="checkbox"></input>
                          </div>
                          <img src={`${URL}${cart.product_image_url}`}></img>
                          <div className="cart-page-product-name-id">
                            <span className="cart-page-product-name">
                              {cart.product_title}
                            </span>
                            <span className="cart-page-product-id">
                              Stoc maxim : {cart.product_total_stock}
                            </span>
                          </div>
                          <div className="cart-page-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <div>
                            <span>Cantiate dorita :</span>
                            <input
                              type="value"
                              className="cart-page-cantitate-dorita"
                              min={1}
                              max={cart.product_total_stock}
                              label="Numar produse"
                              onBlur={(e) => {
                                UpdateQty(
                                  e,
                                  cart.product_item_id,
                                  cart.product_price
                                );
                              }}
                            />{" "}
                            / {cart.product_total_stock}
                          </div>
                          <span>Pret Buc: {cart.product_price} Ron </span>
                        </div>
                        <i
                          class="far fa-times color-red"
                          onClick={(e) => onDeleteCart(e, cart.product_item_id)}
                        ></i>
                      </div>
                    );
                  })}
              </div>

              <div className="cart-product-wrapper card-row padding-15 margin-top-25">
                <span>Supplier 3</span>
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
                      <div className="cart-page-product-container margin-top-25">
                        <div className="cart-page-product-details">
                          <div>
                            <input type="checkbox"></input>
                          </div>
                          <img src={`${URL}${cart.product_image_url}`}></img>
                          <div className="cart-page-product-name-id">
                            <span className="cart-page-product-name">
                              {cart.product_title}
                            </span>
                            <span className="cart-page-product-id">
                              Stoc maxim : {cart.product_total_stock}
                            </span>
                          </div>
                          <div className="cart-page-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <div>
                            <span>Cantiate dorita :</span>
                            <input
                              type="value"
                              className="cart-page-cantitate-dorita"
                              min={1}
                              max={cart.product_total_stock}
                              label="Numar produse"
                              onBlur={(e) => {
                                UpdateQty(
                                  e,
                                  cart.product_item_id,
                                  cart.product_price
                                );
                              }}
                            />{" "}
                            / {cart.product_total_stock}
                          </div>
                          <span>Pret Buc: {cart.product_price} Ron </span>
                        </div>
                        <i
                          class="far fa-times color-red"
                          onClick={(e) => onDeleteCart(e, cart.product_item_id)}
                        ></i>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="cart-product-checkout">
              <div className="cart-product-wrapper-item card-row padding-15 margin-right-15">
               
                <span className="cart-page-delivery-title">
                  <i class="far fa-info-square"></i>Informatii
                </span>

                <span className="cart-product-info-item color-blue">
                  <i class="fas fa-barcode-read margin-right-10 color-blue"></i>
                  Numar produse selectate :
                  <span>Lenghts of checked products</span>
                </span>

                

                <span className="cart-product-info-item color-blue">
                  <i class="far fa-dollar-sign margin-right-10 color-blue"></i>
                  Valoare produse selectate :
                  <span>Sum of checked products</span>
                </span>

                <div className="color-blue cart-product-info-item cart-product-info-item-container ">
                  <span>
                    <i class="fas fa-tags margin-right-10 color-blue"></i>
                    Produse selectate :
                  </span>
                  <span className="cart-product-info-sub-item margin-left-10">
                    <i className="fas fa-circle-notch color-blue livrabil-icon"></i>
                    Name of Product 1 checked
                  </span>

                  <span className="cart-product-info-sub-item margin-left-10">
                    <i className="fas fa-circle-notch color-blue livrabil-icon"></i>
                    Name of Product 2 checked
                  </span>
                </div>

                <button
                className="cart-page-delivery-add-to-cart"
                onClick={(e) => AddToOrder(e)}
              >
                Comanda acum{" "}
                <i class="far fa-shopping-cart margin-left-10 color-white"></i>
              </button>
              
              </div>


            </div>
          </div>
        </form>

        <div className="product-page-table-wrapper margin-top-25">
          <table className="product-page-table zebra">
            <tr className="bg-white">
              <td colSpan="8">
                <span class="page-name color-orange">
                  <i class="fas fa-question-circle margin-right-10 color-orange"></i>
                  Comenzi in asteptare
                </span>
              </td>
            </tr>
            <tr>
              <th>Poza</th>
              <th>Supplier</th>
              <th>Produs</th>
              <th>Cantiate Ceruta</th>
              <th>Pret total</th>
              <th className="td-vertical-center">Status</th>
            </tr>
            <tr>
              <td>
                <img src="https://s13emagst.akamaized.net/products/29978/29977219/images/res_52a31ed1a00dd90b9b56b1dc12831238.jpg?width=200&height=200&hash=8BDFE03B9360A859B39E960AEFE1A724"></img>
              </td>
              <td>Sc Anabella S.r.l</td>
              <td className="product-page-table-name-data">
                Paste Barilla delicioase 150 perfecte pentru ciorba
              </td>
              <td>15 Buc</td>
              <td>180 Ron</td>
              <td className="td-vertical-center">
                <span className="cart-product-info-sub-item margin-left-10 color-orange">
                  <i className="fas fa-circle color-orange livrabil-icon"></i>
                  In asteptare
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <img src="https://s13emagst.akamaized.net/products/29978/29977219/images/res_52a31ed1a00dd90b9b56b1dc12831238.jpg?width=200&height=200&hash=8BDFE03B9360A859B39E960AEFE1A724"></img>
              </td>
              <td>Sc Lidl S.r.l</td>
              <td className="product-page-table-name-data">
                Suc Coca Colla 2.5 L
              </td>
              <td>15 Buc</td>
              <td>180 Ron</td>
              <td className="td-vertical-center">
                <span className="cart-product-info-sub-item margin-left-10 color-orange">
                  <i className="fas fa-circle color-orange livrabil-icon"></i>
                  In asteptare
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <img src="https://s13emagst.akamaized.net/products/29978/29977219/images/res_52a31ed1a00dd90b9b56b1dc12831238.jpg?width=200&height=200&hash=8BDFE03B9360A859B39E960AEFE1A724"></img>
              </td>
              <td>Sc O.K Restaurant S.r.l</td>
              <td className="product-page-table-name-data">Paine alba 200g</td>
              <td>15 Buc</td>
              <td>180 Ron</td>
              <td className="td-vertical-center">
                <span className="cart-product-info-sub-item margin-left-10 color-orange">
                  <i className="fas fa-circle color-orange livrabil-icon"></i>
                  In asteptare
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <img src="https://s13emagst.akamaized.net/products/29978/29977219/images/res_52a31ed1a00dd90b9b56b1dc12831238.jpg?width=200&height=200&hash=8BDFE03B9360A859B39E960AEFE1A724"></img>
              </td>
              <td>Sc Bazar S.r.l</td>
              <td className="product-page-table-name-data">Paine alba 200g</td>
              <td>15 Buc</td>
              <td>180 Ron</td>
              <td className="td-vertical-center">
                <span className="cart-product-info-sub-item margin-left-10 color-orange">
                  <i className="fas fa-circle color-orange livrabil-icon"></i>
                  In asteptare
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
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
