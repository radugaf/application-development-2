import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import Logo from "../../assets/img/logo.png";
import NavBar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";

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
  const [currentSelectProduct, setCurrentSelectProduct] = useState([]);

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

  const onFormSubmit = (e) => {
    e.preventDefault();
    AddInquiry({ product_id: currentSelectProduct });
    toastr.success("Add Product in Inquiries", "Product added successfully");
    GetAddToCart();
  };

  const handleCheck = (e, product_item_id) => {
    const checked = e.target.checked;
    if (checked) {
      setCurrentSelectProduct((product) => [...product, product_item_id]);
    } else {
      const newSelectProduct =
        currentSelectProduct &&
        currentSelectProduct.filter((product) => +product !== +product_item_id);
      setCurrentSelectProduct(newSelectProduct);
    }
  };

  console.log({ currentSelectProduct });
  return (
    <>
      <NavBar />

      <div className="content-wrapper">
        <SideMenu />

        <div className="wishlist-content-wrapper-column">
          <div className="card-row padding-15 page-name-wrapper">
            <span class="page-name color-orange">
              <i class="fas fa-dolly margin-right-10 color-orange"></i>Wishlist
            </span>
          </div>

          <table className="product-page-table margin-top-25">
            <tr>
              <th className="td-vertical-center">Select</th>
              <th>Poza</th>
              <th>Nume</th>
              <th>Status</th>
              <th>Pret</th>
              <th>Qty</th>

              <th className="td-vertical-center">Cantitate</th>
              <th className="td-vertical-center">Sterge</th>
            </tr>
            {carts &&
              carts.not_instant_delivery_items &&
              carts.not_instant_delivery_items.map((cart) => (
                <tr>
                  <td className="td-vertical-center">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheck(e, cart.product_item_id)}
                    ></input>
                  </td>

                  <td className="product-page-table-picture-data">
                    <img src={`${URL}${cart.product_image_url}`}></img>
                  </td>
                  <td className="product-page-table-name-data">
                    {cart.product_title}
                  </td>
                  <td>
                    <span>{cart.is_editable ? "Deschisa" : "Inchisa"}</span>
                  </td>
                  <td>{cart.product_original_price} Ron</td>
                  <td>{cart.quantity_by_restaurant} </td>

                  <td className="td-vertical-center">
                    <input
                      disabled={!cart.is_editable}
                      label="Cantitate dorita"
                      onBlur={(e) => {
                        UpdateQty(e, cart.product_item_id, cart.product_price);
                      }}
                      type="value"
                      className="cart-page-cantitate-dorita"
                    />
                  </td>
                  <td className="td-vertical-center">
                    <i
                      onClick={(e) => onDeleteCart(e, cart.product_item_id)}
                      class="fas fa-times padding-10 color-red"
                    ></i>
                  </td>
                </tr>
              ))}
            <tr>
              <td colspan="7">
                <div className="buton-cere-oferta" onClick={onFormSubmit}>
                  Cere Oferta
                </div>
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
