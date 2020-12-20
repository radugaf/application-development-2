import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";
import { Logout } from "../redux/actions/products";

import { connect } from "react-redux";
class Navbar extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { user } = this.props;
    const userType = user;
    console.log({ user });
    return (
      <Menu>
        {userType && !userType.is_supplier && (
          <>
            <Link to="/cart">
              <Menu.Item
                name="cart"
                active={activeItem === "cart"}
                onClick={this.handleItemClick}
              >
                Cart
              </Menu.Item>
            </Link>

            <Link to="/wishlist">
              <Menu.Item
                name="wishlist"
                active={activeItem === "wishlist"}
                onClick={this.handleItemClick}
              >
                WishList
              </Menu.Item>
            </Link>
          </>
        )}

        {userType && userType.is_supplier && (
          <Link to="/inquiries">
            <Menu.Item
              name="inquiries"
              active={activeItem === "inquiries"}
              onClick={this.handleItemClick}
            >
              Inquiries
            </Menu.Item>
          </Link>
        )}

        <Link to="/products">
          <Menu.Item
            name="products"
            active={activeItem === "products"}
            onClick={this.handleItemClick}
          >
            Products
          </Menu.Item>
        </Link>

        {user && Object.keys(user).length <= 0 && (
          <Link to="/login">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            >
              Login
            </Menu.Item>
          </Link>
        )}
        {userType && userType.is_supplier && (
          <Link to="/orders">
            <Menu.Item
              name="orders"
              active={activeItem === "orders"}
              onClick={this.handleItemClick}
            >
              Orders
            </Menu.Item>
          </Link>
        )}

        <Link to="/forgot-password">
          <Menu.Item
            name="ForgotPassword"
            active={activeItem === "ForgotPassword"}
            onClick={this.handleItemClick}
          >
            Forgot Password
          </Menu.Item>
        </Link>
        {user && Object.keys(user).length > 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem("token");
              window.location.href = "/login";

              // Logout();
            }}
          >
            Logout
          </button>
        )}
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {})(Navbar);
