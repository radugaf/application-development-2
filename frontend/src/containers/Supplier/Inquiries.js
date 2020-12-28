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
  const [currentQty, setCurrentQty] = React.useState();

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
    UpdateInquiry({
      product_id: currentInquire.product_item_id,
      inquiry_id: currentInquire.enquiry_id,
      price: currentInquire.original_price,
      quantity:
        type === "accept" ? currentInquire.quantity_by_restaurant : currentQty,
    });
    GetInquires();
    toastr.success("Accept Inquire", "Inquire Accept Successfully");

    setCurrentQty();
    setCurrentInquire();
    setThirdOpen(false);
    setOpen(false);
  };

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

        <table className='product-page-table margin-top-25'>
            <tr>
              <th>Nume restaurant</th>
              <th>Data Comanda</th>
              <th>Valoare Comanda</th>

              <th className='td-vertical-center'>Vezi Detalii</th>
            </tr>
            <tr>
              <td>Edesia</td>
              <td>12.02.2020</td>
              <td>450 Ron</td>

              <td><div className='offers-vezi-detalii' onClick={() => setVeziComanda(!veziComanda)}>Vezi Detalii</div></td>
            </tr>
            {veziComanda &&
            <>
            <tr>


              <td colSpan='6'>
                <table className='product-page-table margin-top-10'>
                  <tr>
                    <th>Poza</th>
                    <th>Nume Produs</th>
                    <th>Cantitate Ceruta</th>
                    <th>Pret Buc</th>

                    <th>Val Totala</th>
                  </tr>
                  <tr>
                    <td><img src="https://s13emagst.akamaized.net/products/29978/29977219/images/res_52a31ed1a00dd90b9b56b1dc12831238.jpg?width=450&height=450&hash=8F15B0BBA625680557F48724D557F67A"></img></td>
                    <td>Paste Barilla</td>
                    <td>10 Buc</td>
                    <td>10 Ron</td>

                    <td>100 Ron</td>
                  </tr>
                  <tr>
                    <td colspan='3' className='orders-wrapper'>
                      <div className='orders-summary'>
                       <span>Valoare Totala Comanda : 100 Ron</span>
                     </div>
                    </td>
                      <td colspan='3' className='td-vertical-left'>
                        <div className='orders-buttons'>
                          <div className='orders-accept-button'>Accepta</div>
                          <div className='orders-deny-button'>Refuza</div>
                          <div className='orders-partial-button' onClick={() => setOpenModal(!openModal)}>Accepta Partial</div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            </>
        }
          </table>

      </div>
    </div>

    {openModal &&
    <div className='inquiries-partial-modal'>
      <div className="modal-container card-row padding-15">
        <span className='partial-modal-title'>Partial Inquiery</span>
        <div className='partial-modal-item-wrapper'>
          <form className='partiam-modal-form'>
            <table className='partial-modal-table'>
              <tr>
                <th>Product Name</th>
                <th>Required Quantity</th>
                <th>Available Quantity</th>
              </tr>
              <tr>
                <td>Paste Barilla</td>
                <td>300</td>
                <td>
                  <input className='partial-modal-input' type='value'></input>
                </td>
              </tr>
              <tr>
                <td>Paste Barilla</td>
                <td>300</td>
                <td>
                  <input className='partial-modal-input' type='value'></input>
                </td>
              </tr>
              <tr>
                <td>Paste Barilla</td>
                <td>300</td>
                <td>
                  <input className='partial-modal-input' type='value'></input>
                </td>
              </tr>
            </table>
            <div className='partial-modal-button-wrapper'>
              <button className='partial-modal-send-button'>Send Offer</button>
              <button className='partial-modal-cancel-button'>Cancel Offer</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  }
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
