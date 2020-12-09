import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

class Navbar extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (

      <Menu>

        <Link to="/cart">
          <Menu.Item
          name='cart'
          active={activeItem === 'cart'}
          onClick={this.handleItemClick}
          >
          Cart
          </Menu.Item>
        </Link>

        <Link to="/wishlist">
          <Menu.Item
          name='wishlist'
          active={activeItem === 'wishlist'}
          onClick={this.handleItemClick}
          >
          WishList
          </Menu.Item>
        </Link>

        <Link to="/inquiries">
          <Menu.Item
          name='inquiries'
          active={activeItem === 'inquiries'}
          onClick={this.handleItemClick}
          >
          Inquiries
          </Menu.Item>
        </Link>

        <Link to="/products">
          <Menu.Item
          name='products'
          active={activeItem === 'products'}
          onClick={this.handleItemClick}
          >
          Products
          </Menu.Item>
        </Link>


        <Link to="/login">
          <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
          >
          Login
          </Menu.Item>
        </Link>


        <Link to="/orders">
          <Menu.Item
          name='orders'
          active={activeItem === 'orders'}
          onClick={this.handleItemClick}
          >
          Orders
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default Navbar;
