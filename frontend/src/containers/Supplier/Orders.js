import React, { useState, useEffect } from "react";
import TableProducts from "../../components/TableProducts.js";
import axios from "axios";
import Logo from "../../assets/img/logo.png";
import NavBar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";

import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import { GetSupplierOrder, MarkAsDelivery } from "../../redux/actions/products";
import { URL, CREDENTIALS } from "../../requests";

const Orders = ({ GetSupplierOrder, MarkAsDelivery, orders, user }) => {
  const [veziComanda, setVeziComanda] = useState(false);

  // const [formData, setFormData] = useState({
  //   product_item_id: 0, //here is product id is given by default
  // });

  const userType = user;
  useEffect(() => {
    GetSupplierOrder();
  }, []);

  const acceptOrder = async (e, order_id) => {
    e.preventDefault();
    await MarkAsDelivery({ product_id: order_id });
    GetSupplierOrder();
    toastr.success("Order Delivered", "Order Mark As Delivery successfully");
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
            <tr>
              <td>Edesia</td>
              <td>12.02.2020</td>
              <td>Total order amount</td>

              <td>
                <div
                  className="offers-vezi-detalii"
                  onClick={() => setVeziComanda(!veziComanda)}
                >
                  See Details
                </div>
              </td>
            </tr>
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
                      <tr>
                        <td className="td-vertical-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src="https://s13emagst.akamaized.net/products/29978/29977219/images/res_52a31ed1a00dd90b9b56b1dc12831238.jpg?width=450&height=450&hash=8F15B0BBA625680557F48724D557F67A"></img>
                        </td>
                        <td>Paste Barilla</td>
                        <td>10 Buc</td>
                        <td>10 Ron</td>

                        <td>100 Ron</td>
                      </tr>
                      <tr>
                        <td className="td-vertical-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src="https://s13emagst.akamaized.net/products/29978/29977219/images/res_52a31ed1a00dd90b9b56b1dc12831238.jpg?width=450&height=450&hash=8F15B0BBA625680557F48724D557F67A"></img>
                        </td>
                        <td>Paste Barilla</td>
                        <td>10 Buc</td>
                        <td>10 Ron</td>

                        <td>100 Ron</td>
                      </tr>
                      <tr>
                        <td colspan="3" className="orders-wrapper">
                          <div className="orders-summary">
                            <span>Valoare Totala Comanda : 100 Ron</span>
                          </div>
                        </td>
                        <td colspan="3" className="td-vertical-left">
                          <div className="orders-buttons">
                            <div className="orders-accept-button">
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
            <tr>
              <td>Edesia</td>
              <td>12.02.2020</td>
              <td>Total order amount</td>

              <td>
                <div
                  className="offers-vezi-detalii"
                  onClick={() => setVeziComanda(!veziComanda)}
                >
                  See Details
                </div>
              </td>
            </tr>
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
                      <tr>
                        <td className="td-vertical-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src="https://s13emagst.akamaized.net/products/29978/29977219/images/res_52a31ed1a00dd90b9b56b1dc12831238.jpg?width=450&height=450&hash=8F15B0BBA625680557F48724D557F67A"></img>
                        </td>
                        <td>Paste Barilla</td>
                        <td>10 Buc</td>
                        <td>10 Ron</td>

                        <td>100 Ron</td>
                      </tr>
                      <tr>
                        <td className="td-vertical-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src="https://s13emagst.akamaized.net/products/29978/29977219/images/res_52a31ed1a00dd90b9b56b1dc12831238.jpg?width=450&height=450&hash=8F15B0BBA625680557F48724D557F67A"></img>
                        </td>
                        <td>Paste Barilla</td>
                        <td>10 Buc</td>
                        <td>10 Ron</td>

                        <td>100 Ron</td>
                      </tr>
                      <tr>
                        <td colspan="3" className="orders-wrapper">
                          <div className="orders-summary">
                            <span>Valoare Totala Comanda : 100 Ron</span>
                          </div>
                        </td>
                        <td colspan="3" className="td-vertical-left">
                          <div className="orders-buttons">
                            <div className="orders-accept-button">
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
  MarkAsDelivery,
})(Orders);
