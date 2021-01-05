import React, { useState, useEffect } from "react";
import TableProducts from "../../components/TableProducts.js";
import axios from "axios";
import Logo from "../../assets/img/logo.png";
import NavBar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";

import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import { GetSupplierOrder, MarkAsShipped } from "../../redux/actions/products";
import { URL, CREDENTIALS } from "../../requests";

const Orders = ({ GetSupplierOrder, MarkAsShipped, orders, user }) => {
  const [veziComanda, setVeziComanda] = useState();
  const [currentSelectProduct, setCurrentSelectProduct] = useState([]);

  // const [formData, setFormData] = useState({
  //   product_item_id: 0, //here is product id is given by default
  // });

  const userType = user;
  useEffect(() => {
    GetSupplierOrder();
    // MarkAsShipped()
  }, []);

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

  const onFormSubmit = (e) => {
    e.preventDefault();
    MarkAsShipped({ product_id: currentSelectProduct });
    toastr.success("Mark Order as Shipped", "Order Accepted");
    GetSupplierOrder();
    window.location.href = "/orders";
  };

  const handleAllCheck = (e,orders) => {
    e.preventDefault();
const product_ids=[]
    const notinstanceDeliver =
orders && orders.map((order)=>product_ids.push(order.product_item_id))     
    console.log({ product_ids });
  MarkAsShipped({ product_id: product_ids });
    toastr.success("Mark Order as Shipped", "Order Accepted");
    GetSupplierOrder();
    window.location.href = "/orders";

  };
 
  return (
    <>
      <NavBar />

      <div className="content-wrapper">
        <SideMenu />

        <div className="products-wrapper">
          <div className="products-name-view card-row flex-row vertical-center padding-15">
            <i class="fal fa-barcode-read margin-right-10 color-blue"></i>
            <span className="bold-700 color-blue">Orders</span>
          </div>

          <table className="product-page-table margin-top-25">
            {userType && userType.is_supplier && (
              <tr>
                <th>Nume restaurant</th>
                <th>Data Comanda</th>
                <th>Valoare Comanda</th>

                <th className="td-vertical-center">See Details</th>
              </tr>
            )}
            {Object.keys(orders) &&
              Object.keys(orders).map((key) => (
                <tr>
                  <td>{key}</td>
                  <td>12.02.2020</td>
                  <td>Total order amount</td>

                  <td>
                    <div
                      className="offers-vezi-detalii"
                      onClick={() => setVeziComanda(key)}
                    >
                      See Details
                    </div>
                  </td>
                </tr>
              ))}
            {veziComanda && (
              <>
                <tr>
                  <td colSpan="6">
                    <table className="product-page-table margin-top-10">
                      <tr>
                        <th className="td-vertical-center">Select</th>
                        <th>Poza Produs</th>
                        <th>Nume Produs</th>
                        <th>Cantitate</th>
                        <th>Pret Buc</th>

                        <th>Valoare Totala</th>
                      </tr>

                      {orders &&
                        orders[veziComanda] &&
                        orders[veziComanda].map((inquire) => (
                          <tr>
                            <td className="td-vertical-center">
                              <input
                                type="checkbox"
                                onChange={(e) =>
                                  handleCheck(e, inquire.product_item_id)
                                }
                              />
                            </td>
                            <td>
                              <img
                                src={`${URL}${inquire.product_image_url}`}
                              ></img>
                            </td>
                            <td>{inquire.product_title}</td>
                            <td>{inquire.product_quantity} Buc</td>
                            <td>{inquire.product_price} Ron</td>
                            <td>{inquire.total} Ron</td>
                          </tr>
                        ))}
                      <tr>
                        <td colspan="3" className="orders-wrapper">
                          <div className="orders-summary">
                            {/* TODO */}
                            <span>Valoare Totala Comanda : Ron</span>
                          </div>
                        </td>
                         <td colspan="2" className="td-vertical-left">
                          <div className="orders-buttons">
                            <div
                              className="orders-accept-button"
                              onClick={(e)=>handleAllCheck(e,orders[veziComanda])}
                            >
                              Select All and send
                            </div>
                          </div>
                        </td>
                        <td colspan="3" className="td-vertical-left">
                          <div className="orders-buttons">
                            <div
                              className="orders-accept-button"
                              onClick={onFormSubmit}
                            >
                              Mark as shipped
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.products.cartsDetails,
    orders: state.products.supplierOrdersDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  GetSupplierOrder,
  MarkAsShipped,
})(Orders);
