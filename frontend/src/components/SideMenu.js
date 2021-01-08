import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";
import { Logout } from "../redux/actions/products";
import { connect } from "react-redux";

const SideMenu = ({ user }) => {
  const userType = user;
  console.log({ user });

  return (
    <div className="aside-menu-wrapper card-row">
      <div className="side-menu-item">
        <a href="/products">
          <i class="fas fa-boxes"></i>Products
          <i class="fas fa-chevron-right show-more"></i>
        </a>
      </div>
      {userType &&
        (userType.is_restaurant_owner || userType.is_restaurant_staff) && (
          <>
            <div className="side-menu-item">
              <a href="/cart">
                <i class="far fa-shopping-cart"></i>Cart
                <i class="fas fa-chevron-right show-more"></i>
              </a>
            </div>
            <div className="side-menu-item">
              <a href="/wishlist">
                <i class="far fa-star"></i>Wishlist
                <i class="fas fa-chevron-right show-more"></i>
              </a>
            </div>
          </>
        )}
      <div className="side-menu-item">
        <a href="istoric-comenzi">
          <i class="far fa-clipboard"></i>Order History
          <i class="fas fa-chevron-right show-more"></i>
        </a>
      </div>
      {userType && (userType.is_company_owner || userType.is_company_staff) && (
        <>
          <div className="side-menu-item">
            <a href="inquiries">
              <i class="far fa-question-circle"></i>Inquiries
              <i class="fas fa-chevron-right show-more"></i>
            </a>
          </div>

          <div className="side-menu-item">
            <a href="/orders">
              <i class="far fa-tags"></i>Orders
              <i class="fas fa-chevron-right show-more"></i>
            </a>
          </div>
        </>
      )}
      <div className="side-menu-item">
        <a href="/invoices">
          <i class="far fa-file-invoice-dollar"></i>Invoice
          <i class="fas fa-chevron-right show-more"></i>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {})(SideMenu);
