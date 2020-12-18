import React from "react";
import MainCss from "./assets/main/main.scss";
import { BrowserRouter, Route } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";

//Components
import Navbar from "./components/Navbar";
import TestComponent from "./components/TestComponent";

import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";

// Containers
import Home from "./containers/Home";

// --> SUPPLIER <--
import ProductsPage from "./containers/Supplier/ProductsPage";

import Inquiries from "./containers/Supplier/Inquiries";

import Orders from "./containers/Supplier/Orders";

// --> RESTAURANT <--
import WishList from "./containers/Restaurant/WishList";
import Cart from "./containers/Restaurant/Cart";

import { Provider } from "react-redux";

import { store } from "./redux/store";

// Alert Options
const alertOptions = {
  timeout: 3000,
  newestOnTop: false,
  position: "top-right",
  preventDuplicates: true,
  transitionIn: "fadeIn",
  transitionOut: "fadeOut",
  progressBar: true,
  closeOnToastrClick: true,
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <ReduxToastr
            getState={(state) => state.toastr} // This is the default
            {...alertOptions}
          />
          <Route path="/" exact component={Home} />
          <Route path="/test" exact component={TestComponent} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/wishlist" exact component={WishList} />
          <Route path="/inquiries" exact component={Inquiries} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
