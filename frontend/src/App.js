import React from "react";
import MainCss from "./assets/main/main.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
//Components
import Navbar from "./components/Navbar";
import TestComponent from "./components/TestComponent";
import AddProduct from "./components/AddProduct";
import AddUser from "./components/AddUser";
import Login from "./components/Login";

import Terms from "./containers/Terms";

// Containers
import Home from "./containers/Home";
import UserSignUp from "./containers/UserSignUp";
import UsersList from "./containers/UsersList";
// --> SUPPLIER <--
import ProductsPage from "./containers/Supplier/ProductsPage";
import EditProduct from "./containers/Supplier/EditProduct";
import Inquiries from "./containers/Supplier/Inquiries";
import SupplierList from "./containers/Supplier/SupplierList";
import SupplierSignUp from "./containers/Supplier/SupplierSignUp";
import SupplierProfile from "./containers/Supplier/SupplierProfile";
// --> RESTAURANT <--
import WishList from "./containers/Restaurant/WishList";
import Cart from "./containers/Restaurant/Cart";
import RestaurantSignUp from "./containers/Restaurant/RestaurantSignUp";
import RestaurantList from "./containers/Restaurant/RestaurantList";
import RestaurantProfile from "./containers/Restaurant/RestaurantProfile";
import RestaurantProductsPage from "./containers/Restaurant/RestaurantProductsPage";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/test" exact component={TestComponent} />

        <Route path="/cart" exact component={Cart} />
        <Route path="/wishlist" exact component={WishList} />
        <Route path="/inquiries" exact component={Inquiries} />

        {/* Products */}
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/add-product" exact component={AddProduct} />
        <Route path="/edit-product" exact component={EditProduct} />

        {/* Users */}
        <Route path="/users" exact component={UsersList} />
        <Route path="/add-user" exact component={AddUser} />
        <Route path="/user-sign-up" exact component={UserSignUp} />

        {/* Restaurants */}
        <Route path="/restaurants" exact component={RestaurantList} />
        <Route path="/restaurant-sign-up" exact component={RestaurantSignUp} />
        <Route path="/restaurant-profile" exact component={RestaurantProfile} />
        <Route
          path="/restaurant-products-page"
          exact
          component={RestaurantProductsPage}
        />

        {/* Supplier */}
        <Route path="/supplier-profile" exact component={SupplierProfile} />
        <Route path="/supplier" exact component={SupplierList} />
        <Route path="/supplier-sign-up" exact component={SupplierSignUp} />

        <Route path="/terms-and-condition" exact component={Terms} />
      </BrowserRouter>
    </div>
  );
};

export default App;
