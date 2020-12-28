import React, { useState, useEffect } from "react";

import Logo from "../../assets/img/logo.png";
import NavBar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";



const IstoricComenzi = () => {

  const [supplierOne, setSupplierOne] = useState(false);
  const [supplierTwo, setSupplierTwo] = useState(false);

  const [dateOne, setDateOne] = useState(false);
  const [dateTwo, setDateTwo] = useState(false);
  const [dateThree, setDateThree] = useState(false);
  const [dateFour, setDateFour] = useState(false);


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
 
          <li className='order-history-supplier'><span className='color-blue'><i class="fas fa-cash-register color-blue margin-right-10"></i>Supplier 1<i onClick={() => setSupplierOne(!supplierOne)} class="istoric-comenzi-supplier-dropdown color-blue fas fa-chevron-down"></i></span>
          {supplierOne && (
            <>
          <form>
            <ol className='order-history-date-wrapper'>
              <li className='order-history-date'><span><i class="margin-right-10 color-green far fa-calendar-alt"></i>Data 15.02.2020<i onClick={() => setDateOne(!dateOne)} class="istoric-comenzi-date-dropdown color-green fas fa-chevron-down"></i></span>
              {dateOne && (
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
                        <td className='td-vertical-center'><input type='checkbox'></input></td>
                        <td><img src='#'></img></td>
                        <td>Paste</td>
                        <td>12 Buc</td>
                        <td>10 Ron</td>
                        <td>500 Ron</td>
                      </tr>
                      <tr>
                        <td colSpan='6' className='istoric-comenzi-wrapper'>
                          <button className='istoric-comenzi-button'>Mark as delivered</button>
                        </td>
                      </tr>
                    </table>
                  </li>
                </ul>
              )}
              </li>
            </ol>
            </form>

            <form>
            <ol className='order-history-date-wrapper'>
              <li className='order-history-date'><span><i class="margin-right-10 color-green far fa-calendar-alt"></i>Data 15.02.2020<i onClick={() => setDateTwo(!dateTwo)} class="istoric-comenzi-date-dropdown color-green fas fa-chevron-down"></i></span>
              {dateTwo && (
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
                        <td className='td-vertical-center'><input type='checkbox'></input></td>
                        <td><img src='#'></img></td>
                        <td>Paste</td>
                        <td>12 Buc</td>
                        <td>10 Ron</td>
                        <td>500 Ron</td>
                      </tr>
                      <tr>
                        <td colSpan='6' className='istoric-comenzi-wrapper'>
                          <button className='istoric-comenzi-button'>Mark as delivered</button>
                        </td>
                      </tr>
                    </table>
                  </li>
                </ul>
              )}
              </li>
            </ol>
            </form>
            </>
          )}
          </li>



          <li className='order-history-supplier'><span className='color-blue'><i class="fas fa-cash-register color-blue margin-right-10"></i>Supplier 1<i onClick={() => setSupplierTwo(!supplierTwo)} class="istoric-comenzi-supplier-dropdown color-blue fas fa-chevron-down"></i></span>
          {supplierTwo && (
            <>
          <form>
            <ol className='order-history-date-wrapper'>
              <li className='order-history-date'><span><i class="margin-right-10 color-green far fa-calendar-alt"></i>Data 15.02.2020<i onClick={() => setDateThree(!dateThree)} class="istoric-comenzi-date-dropdown color-green fas fa-chevron-down"></i></span>
              {dateThree && (
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
                        <td className='td-vertical-center'><input type='checkbox'></input></td>
                        <td><img src='#'></img></td>
                        <td>Paste</td>
                        <td>12 Buc</td>
                        <td>10 Ron</td>
                        <td>500 Ron</td>
                      </tr>
                      <tr>
                        <td colSpan='6' className='istoric-comenzi-wrapper'>
                          <button className='istoric-comenzi-button'>Mark as delivered</button>
                        </td>
                      </tr>
                    </table>
                  </li>
                </ul>
              )}
              </li>
            </ol>
            </form>

            <form>
            <ol className='order-history-date-wrapper'>
              <li className='order-history-date'><span><i class="margin-right-10 color-green far fa-calendar-alt"></i>Data 15.02.2020<i onClick={() => setDateFour(!dateFour)} class="istoric-comenzi-date-dropdown color-green fas fa-chevron-down"></i></span>
              {dateFour && (
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
                        <td className='td-vertical-center'><input type='checkbox'></input></td>
                        <td><img src='#'></img></td>
                        <td>Paste</td>
                        <td>12 Buc</td>
                        <td>10 Ron</td>
                        <td>500 Ron</td>
                      </tr>
                      <tr>
                        <td colSpan='6' className='istoric-comenzi-wrapper'>
                          <button className='istoric-comenzi-button'>Mark as delivered</button>
                        </td>
                      </tr>
                    </table>
                  </li>
                </ul>
              )}
              </li>
            </ol>
            </form>
            </>
          )}
          </li>

        </ul>

    











       
      </div>
    </div>
    </>
  );
};

export default IstoricComenzi;