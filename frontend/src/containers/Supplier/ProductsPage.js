import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import NavBar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";
import Logo from "../../assets/img/logo.png";

import Addproductmodal from "./addproductmodal.js";

import {
  ProductFetch,
  AddToCart,
  SetToken,
} from "../../redux/actions/products";
import TableProducts from "../../components/TableProducts.js";
import { URL, CREDENTIALS } from "../../requests";

const ProductsPage = ({
  ProductFetch,
  AddToCart,
  SetToken,
  products,
  authErrors,
}) => {
  // FILTERS -------------------------------------------------------------------------------------------------------------

  const [filterOne, setFilterOne] = useState(false);
  const [filterTwo, setFilterTwo] = useState(false);
  const [filterThree, setFilterThree] = useState(false);
  const [filterFour, setFilterFour] = useState(false);

  // PRODUCTS VIEW MODE -------------------------------------------------------------------------------------------------------------

  const [listView, setListView] = useState(false);
  const [cardView, setCardView] = useState(true);

  // const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    product_id: 0, //here is product id is given by default
  });
  console.log({ formData });
  const { product_id } = formData;

  useEffect(() => {
    ProductFetch();
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e, product_id, type) => {
    e.preventDefault();
    AddToCart({ product_id: product_id });
    toastr.success(`Add To ${type}`, `Add To ${type} successfully added `);

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
    <>
      <NavBar />

<div className="content-wrapper">

<SideMenu />

        <div className="products-wrapper">
          <div className="products-name-view card-row flex-row vertical-center padding-15">
            <i class="fal fa-barcode-read margin-right-10 color-blue"></i>
            <span className="bold-700 color-blue">1350 - PRODUSE TOTALE</span>
            <span
              onClick={() => {
                setListView(true);
                setCardView(false);
              }}
              className="align-right margin-right-10"
            >
              <i className="fas fa-list color-blue"></i>
            </span>
            <span
              onClick={() => {
                setCardView(true);
                setListView(false);
              }}
            >
              <i className="fas fa-th-large color-blue"></i>
            </span>
          </div>

          <div className="products-page-search-wrapper card-row padding-15 margin-top-15">
            <span className="bold-700 color-teal">Cauta Produse</span>
            <input type="search>" />
            <i class="fal fa-search color-teal"></i>
          </div>

          <div className="products-filters card-row margin-top-15 padding-15 flex-column">
            <span className="bold-700 color-violet">
              <i className="fas fa-filter color-violet margin-right-10"></i>
              Filtre
            </span>
            <div className="products-filters-wrapper">
              <div
                className="produts-filter-one"
                onClick={() => setFilterOne(!filterOne)}
              >
                <div className="produts-filter-header">
                  <span className="color-violet">Pret</span>
                  <i className="fal fa-chevron-down color-violet"></i>
                </div>
                {filterOne && (
                  <div className="product-filter-content">
                    <div>Test2</div>
                    <div>Test2</div>
                    <div>Test2</div>
                    <div>Test2</div>
                  </div>
                )}
              </div>

              <div
                className="produts-filter-two"
                onClick={() => setFilterTwo(!filterTwo)}
              >
                <div className="produts-filter-header">
                  <span className="color-violet">Categorie</span>
                  <i className="fal fa-chevron-down color-violet"></i>
                </div>
                {filterTwo && (
                  <div className="product-filter-content">
                    <div>Test2</div>
                    <div>Test2</div>
                    <div>Test2</div>
                    <div>Test2</div>
                  </div>
                )}
              </div>

              <div
                className="produts-filter-three"
                onClick={() => setFilterThree(!filterThree)}
              >
                <div className="produts-filter-header">
                  <span className="color-violet">Rating</span>
                  <i className="fal fa-chevron-down color-violet"></i>
                </div>
                {filterThree && (
                  <div className="product-filter-content">
                    <div>Test2</div>
                    <div>Test2</div>
                    <div>Test2</div>
                    <div>Test2</div>
                  </div>
                )}
              </div>

              <div
                className="produts-filter-four"
                onClick={() => setFilterFour(!filterFour)}
              >
                <div className="produts-filter-header">
                  <span className="color-violet">Producator</span>
                  <i className="fal fa-chevron-down color-violet"></i>
                </div>
                {filterFour && (
                  <div className="product-filter-content">
                    <div>Test2</div>
                    <div>Test2</div>
                    <div>Test2</div>
                    <div>Test2</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CARD VIEW */}

          {cardView && (
            <>
              <div className="product-card-wrapper margin-top-15">
                {products &&
                  products.map((product) => (
                    <div className="product-card card-row">
                      <img src={`${URL}${product.image_main}`}></img>
                      <div className="padding-15 product-card-items">
                        <span
                          className={
                            product.instant_delivery
                              ? "product-card-item-category color-green"
                              : "product-card-item-category color-orange"
                          }
                        >
                          <i
                            class={
                              product.instant_delivery
                                ? "fas fa-circle color-green livrabil-icon"
                                : "fas fa-circle color-orange livrabil-icon"
                            }
                          ></i>
                          Livrabil instant :
                          {product.instant_delivery ? "Da" : "Nu"}
                        </span>
                        <span className="product-card-item-name">
                          {product.title}
                        </span>
                        <span className="product-card-item-stock">
                          {product.instant_delivery ? (
                            <>Cantitate disponibila : {product.total_stock}</>
                          ) : (
                            "Cere Oferta"
                          )}
                        </span>
                        <span className="product-card-item-rating"></span>
                        <span className="product-card-item-price">
                          Pret : {product.price} Ron
                        </span>
                      </div>
                      <div
                        className={
                          product.instant_delivery
                            ? "button-add-to-cart"
                            : "button-add-to-wishlist"
                        }
                        onClick={(e) => {
                          setFormData({
                            ...formData,
                            product_id: product.id,
                          });
                          onSubmit(
                            e,
                            product.id,
                            product.instant_delivery ? "Cart" : "Wishlist"
                          );
                        }}
                      >
                        {product.instant_delivery
                          ? "Adauga in cos"
                          : "Adauga in wishlist"}
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}

          {/* LIST VIEW */}

          {listView && (
            <>
              <div className="product-page-table-wrapper margin-top-15">
                <table className="product-page-table">
                  <tr>
                    {/* <th>Poza</th> */}
                    <th>Nume Produs</th>
                    <th>Disponibilitate</th>
                    <th>Stoc maxim</th>
                    <th>Pret</th>
                    <th className='td-vertical-center'>Actiune</th>
                  </tr>
                  {products &&
                    products.map((product) => (
                      <tr>
                        {/* <td className="product-page-table-picture-data-list">
                          <img src={`${URL}${product.image_main}`}></img>
                        </td> */}
                        <td className="product-page-table-name-data">
                          {product.title}
                        </td>
                        <td>
                          <span
                            className={
                              product.instant_delivery
                                ? "product-card-item-category color-green"
                                : "product-card-item-category color-orange"
                            }
                          >
                            <i
                              class={
                                product.instant_delivery
                                  ? "fas fa-circle color-green livrabil-icon"
                                  : "fas fa-circle color-orange livrabil-icon"
                              }
                            ></i>
                            Livrabil instant :
                            {product.instant_delivery ? "Da" : "Nu"}
                          </span>
                        </td>
                        <td>
                          <span className="product-card-item-stock">
                            {product.instant_delivery ? (
                              <>{product.total_stock}</>
                            ) : (
                              "Cere Oferta"
                            )}
                          </span>
                        </td>
                        <td>{product.price}</td>
                        <td className='width80'>
                          <div
                            className={
                              product.instant_delivery
                                ? "button-add-to-cart-list"
                                : "button-add-to-wishlist-list"
                            }
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                product_id: product.id,
                              });
                              onSubmit(
                                e,
                                product.id,
                                product.instant_delivery ? "Cart" : "Wishlist"
                              );
                            }}
                          >
                            {product.instant_delivery
                              ? "Adauga in cos"
                              : "Adauga in wishlist"}
                          </div>
                        </td>
                      </tr>
                    ))}
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.productsDetails,
    authErrors: state.products.error,
  };
};
export default connect(mapStateToProps, {
  ProductFetch,
  AddToCart,
  SetToken,
})(ProductsPage);
