import React, { useState, useEffect } from "react";
import TableProducts from "../../components/TableProducts.js";
import Logo from "../../assets/img/logo.png";
import NavBar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";

import ITableModalsAccept from "../../components/Table/iTableModalsAccept";
import ITableModalsDecline from "../../components/Table/iTableModalsDecline";
import ITableModalsPartial from "../../components/Table/iTableModalsPartial";

import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import {
  GetInquires,
  DeclineInquiry,
  UpdateInquiry,
} from "../../redux/actions/products";

import requests, { URL, CREDENTIALS } from "../../requests";

const Inquiries = ({
  inquires,
  GetInquires,
  UpdateInquiry,
  DeclineInquiry,
  user,
}) => {
  const [veziComanda, setVeziComanda] = useState(false);
  // MODAL SETTINGS

  const [openModal, setOpenModal] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [thirdOpen, setThirdOpen] = React.useState(false);
  const [currentInquire, setCurrentInquire] = React.useState();
  const [currentQty, setCurrentQty] = React.useState([]);

  useEffect(() => {
    GetInquires();
  }, []);
  const onReject = (e) => {
    e.preventDefault();
    DeclineInquiry({
      product_id: currentInquire.product_item_id,
      inquiry_id: currentInquire.enquiry_id,
    });
    GetInquires();
    toastr.success("Reject Inquire", "Inquire Reject Successfully");
    setCurrentInquire();
    setSecondOpen(false);
    GetInquires();
  };

  const onUpdate = (e, type) => {
    {
      currentQty &&
        currentQty.map((qty) => {
          UpdateInquiry({
            product_id: qty.product_item_id,
            inquiry_id: qty.enquiry_id,
            price: qty.original_price,
            quantity:
              type === "accept" ? qty.quantity_by_restaurant : qty.updateQty,
          });
        });
    }

    GetInquires();
    toastr.success("Accept Inquire", "Inquire Accept Successfully");

    setCurrentQty();
    setCurrentInquire();
    setThirdOpen(false);
    setOpen(false);
  };

  const onChangeValueUpdate = (e, currentinq, index) => {
    const inquiry = currentinq[index];
    console.log({ inquiry, index });
    const updatedQty = +e.target.value;
    const filter =
      currentQty &&
      currentQty.filter((qty) => {
        if (
          qty.product_item_id === inquiry.product_item_id &&
          qty.enquiry_id === inquiry.enquiry_id
        ) {
          return qty;
        }
      });
    console.log({ currentQty });
    if (filter.length > 0) {
      const newData =
        currentQty &&
        currentQty.map((qty) => {
          if (
            qty.product_item_id === inquiry.product_item_id &&
            qty.enquiry_id === inquiry.enquiry_id
          ) {
            qty.updateQty = updatedQty;
          }
          return qty;
        });

      setCurrentQty(newData);
    } else {
      console.log({ inquiry });
      setCurrentQty((qty) => [
        ...qty,
        { ...inquiry, updateQty: +e.target.value },
      ]);
    }
  };

  console.log({ currentQty });

  return (
    <>
      <NavBar />

      <div className="content-wrapper">
        <SideMenu />

        <div className="products-wrapper">
          <div className="products-name-view card-row flex-row vertical-center padding-15">
            <i class="fal fa-barcode-read margin-right-10 color-blue"></i>
            <span className="bold-700 color-blue">Inquiries</span>
          </div>

          <table className="product-page-table margin-top-25">
            <tr>
              <th>Nume restaurant</th>
              <th>Data Comanda</th>
              <th>Valoare Comanda</th>

              <th className="td-vertical-center">Vezi Detalii</th>
            </tr>
            {Object.keys(inquires) &&
              Object.keys(inquires).map((key) => (
                <>
                  <tr>
                    <td>{key}</td>
                    <td>12.02.2020</td>
                    <td>450 Ron</td>

                    <td>
                      <div
                        className="offers-vezi-detalii"
                        onClick={() => setVeziComanda(key)}
                      >
                        Vezi Detalii
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            {veziComanda && (
              <>
                <tr>
                  <td colSpan="6">
                    <table className="product-page-table margin-top-10">
                      <tr>
                        <th>Poza</th>
                        <th>Nume Produs</th>
                        <th>Cantitate Ceruta</th>
                        <th>Pret Buc</th>

                        <th>Val Totala</th>
                      </tr>
                      {inquires &&
                        inquires[veziComanda] &&
                        inquires[veziComanda].map((inquire) => (
                          <tr>
                            <td>
                              <img src={`${URL}${inquire.product_image}`}></img>
                            </td>
                            <td>{inquire.product_title}</td>
                            <td>{inquire.quantity_by_restaurant} Buc</td>
                            <td>{inquire.original_price} Ron</td>
                            {/* TODO:TOTAL REMAIN */}
                            <td>100 Ron</td>
                          </tr>
                        ))}
                      <tr>
                        <td colspan="3" className="orders-wrapper">
                          <div className="orders-summary">
                            <span>Valoare Totala Comanda : 100 Ron</span>
                          </div>
                        </td>
                        <td colspan="3" className="td-vertical-left">
                          <div className="orders-buttons">
                            <div className="orders-accept-button">Accepta</div>
                            <div className="orders-deny-button">Refuza</div>
                            <div
                              className="orders-partial-button"
                              onClick={() => setOpenModal(!openModal)}
                            >
                              Accepta Partial
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

      {openModal && veziComanda && (
        <div className="inquiries-partial-modal">
          <div className="modal-container card-row padding-15">
            <span className="partial-modal-title">Partial Inquiery</span>
            <div className="partial-modal-item-wrapper">
              <form className="partiam-modal-form">
                <table className="partial-modal-table">
                  <tr>
                    <th>Product Name</th>
                    <th>Required Quantity</th>
                    <th>Available Quantity</th>
                  </tr>
                  {inquires &&
                    inquires[veziComanda] &&
                    inquires[veziComanda].map((inquire, index) => (
                      <tr>
                        <td>{inquire.product_title}</td>
                        <td>{inquire.quantity_by_restaurant}</td>
                        <td>
                          <input
                            className="partial-modal-input"
                            type="value"
                            onBlur={(e) =>
                              onChangeValueUpdate(
                                e,
                                inquires[veziComanda],
                                index
                              )
                            }
                          ></input>
                        </td>
                      </tr>
                    ))}
                </table>
                <div className="partial-modal-button-wrapper">
                  <button
                    className="partial-modal-send-button"
                    onClick={(e) => onUpdate(e, "")}
                  >
                    Send Offer
                  </button>
                  <button className="partial-modal-cancel-button">
                    Cancel Offer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    inquires: state.products.inquiredDetails,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  GetInquires,
  DeclineInquiry,
  UpdateInquiry,
})(Inquiries);
