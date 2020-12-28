import React from "react";
import MainCss from "./assets/main/main.scss";
import { BrowserRouter, Route } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";

import {
  Login,
  ForgotPassword,
  ProductsPage,
  Inquiries,
  Orders,
  WishList,
  Cart,
  IstoricComenzi,
} from "./AppImports";

import PrivateRoute from "./components/PrivateRoute";

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
          <ReduxToastr
            getState={(state) => state.toastr} // This is the default
            {...alertOptions}
          />
          <Route path="/" exact component={ProductsPage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/wishlist" exact component={WishList} />
          <Route path="/istoric-comenzi" exact component={IstoricComenzi} />
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
