import React, { useState, useEffect } from "react";

import Logo from "../../assets/img/logo.png";
import NavBar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";


import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import { GetRestaurantOrder, MarkAsDelivery,MarkAsShipped } from "../../redux/actions/products";
import { URL, CREDENTIALS } from "../../requests";


const IstoricComenzi = ({GetRestaurantOrder,MarkAsDelivery,orders,user}) => {
  const userType = user;
  useEffect(() => {
    GetRestaurantOrder()
  
  }, []);
  const [currentSelectProduct, setCurrentSelectProduct] = useState([]);

  const [supplierOne, setSupplierOne] = useState(false);
  const [supplierTwo, setSupplierTwo] = useState(false);

  const [dateOne, setDateOne] = useState(false);
  const [dateTwo, setDateTwo] = useState(false);
  const [dateThree, setDateThree] = useState(false);
  const [dateFour, setDateFour] = useState(false);

  
  const handleCheck = (e, product_item_id, productName, price) => {
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

 const acceptOrder = async (e) => {
    e.preventDefault();
    await MarkAsDelivery({ product_id: currentSelectProduct });
    GetRestaurantOrder();
    toastr.success("Order Mark Ad Delivered", "Order Mark As Delivery successfully");
    window.location.href = "/istoric-comenzi";
  };

  return (
    <>
      <NavBar />

<div className="content-wrapper">

<SideMenu />

      <div className="products-wrapper">
        <div className="products-name-view card-row flex-row vertical-center padding-15">
          <i class="fal fa-barcode-read margin-right-10 color-orange"></i>
          <span className="bold-700 color-orange">Istoric Comenzi</span>
        </div>


        <ul className='card-row order-history-wrapper'>
  {Object.keys(orders) &&
              Object.keys(orders).map((key) => (
          <li className='order-history-supplier'><span className='color-blue'><i class="fas fa-cash-register color-blue margin-right-10"></i>{key}<i onClick={() => setSupplierOne(key)} class="istoric-comenzi-supplier-dropdown color-blue fas fa-chevron-down"></i></span>
          {supplierOne && orders &&
                        orders[supplierOne] &&
                        Object.keys(orders[supplierOne]) &&
              Object.keys(orders[supplierOne]).map((key) => (
            
            <>
          <form>
            <ol className='order-history-date-wrapper'>
              <li className='order-history-date'><span><i class="margin-right-10 color-green far fa-calendar-alt"></i>Data {key}<i onClick={() => setDateOne(key)} class="istoric-comenzi-date-dropdown color-green fas fa-chevron-down"></i></span>
              {dateOne && orders[supplierOne] && orders[supplierOne][key] && orders[supplierOne][key].map((product)=> (
                <ul className='order-history-table-wrapper'>
                  <li>
                    <table className='order-history-table'>
                      <tr>
                        <th className='td-vertical-center'>Select</th>
                        <th>Poza</th>
                        <th>Nume Produs</th>
                        <th>Cantitate</th>
                        <th>Pret Buc</th>
                        <th>Valoare Totala</th>
                      </tr>
                      <tr>
                        <td className='td-vertical-center'><input type='checkbox'  onChange={(e) =>handleCheck(e, product.product_item_id)}></input></td>
                        <td> <img width="10%" src={`${URL}${product.product_image_url}`}></img></td>
                        <td>{product.product_title}</td>
                        <td>{product.product_price} Buc</td>
                        {/* TODO:Not value come from frontend */}
                        <td>{product.product_price} Ron</td>
                        {/* TODO:Not value come from frontend */}

                        <td>{product.product_price} Ron</td>
                      </tr>
                      <tr>
                        <td colSpan='6' className='istoric-comenzi-wrapper'>
                          <button className='istoric-comenzi-button' onClick={acceptOrder}>Mark as delivered</button>
                        </td>
                      </tr>
                    </table>
                  </li>
                </ul>))}
              
              </li>
            </ol>
            </form>
            </>
          ))}
          </li>))}




        </ul>

    











       
      </div>
    </div>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    carts: state.products.cartsDetails,
    orders: state.products.restaurantOrdersDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  GetRestaurantOrder,
  MarkAsDelivery,
  MarkAsShipped,
})(IstoricComenzi);
