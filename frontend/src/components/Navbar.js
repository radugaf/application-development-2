import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

class Navbar extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const options = [
      { key: 1, text: "Restaurant Sign UP", value: 1 },
      { key: 2, text: "Supplier Sign Up", value: 2 },
      { key: 3, text: "Reset Password", value: 3 },
      { key: 4, text: "Invite", value: 4 },
    ];

    return (
      <Menu>
        <Menu.Item header>COMPANY LOGO</Menu.Item>
        <Menu.Menu position="right">
          <Link to="/">
            <Menu.Item
              name="Home"
              active={activeItem === "Home"}
              onClick={this.handleItemClick}
            />
          </Link>
      
          <Link to="/cart">
            <Menu.Item
              name="Cart"
              active={activeItem === "Cart"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/wishlist">
            <Menu.Item
              name="Wishlist"
              active={activeItem === "Wishlist"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/inquiries">
            <Menu.Item
              name="Inquiries"
              active={activeItem === "Inquiries"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/products">
            <Menu.Item
              name="Products"
              active={activeItem === "Products"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/users">
            <Menu.Item
              name="Users"
              active={activeItem === "Users"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/login">
            <Menu.Item
              name="Login"
              active={activeItem === "Login"}
              onClick={this.handleItemClick}
            />
          </Link>
          
          <Dropdown text="Dropdown" options={options} simple item />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
