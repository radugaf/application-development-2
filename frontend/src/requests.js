export const URL = "http://localhost:8000";
export const BACKEND_URL = `${URL}/api/v1/`;

export default {
  //   Auth
  GET_TOKEN: "token/",
  GET_CHECK_USER_TYPE: "check-user-type/",
  //   Product
  SUPPLIER_PRODUCT_LIST: "supplier-product-list/",
  RESTAURANT_PRODUCT_LIST: "restaurant-product-list/",
  SUPPLIER_ADD_PRODUCT_IN_CART: "add-product-in-cart/",
  //   Cart
  GET_RESTAURANT_ADD_CART: "product-list-in-cart/",
  UPDATE_RESTAURANT_ADD_CART: "update-product-in-cart/",
  DELETE_RESTAURANT_ADD_CART: "remove-product-in-cart/",
  //   Inquires
  GET_SUPPLIER_INQUIRES: "enquiry-list/",
  ADD_RESTAURANT_INQUIRES: "add-items-in-enquiry/",
  UPDATE_SUPPLIER_INQUIRES: "update-enquiry-request/",
  DECLINE_SUPPLIER_INQUIRES: "decline-enquiry-request/",
  //   Orders
  GET_RESTAURANT_ORDERS: "restaurant-ordered-product-list/",
  PLACE_ORDER_RESTAURANT_ORDER: "place-order/",
  MARK_ORDER_AS_SHIPPED_SUPPLIER_ORDER: "mark-orders-as-shipped/",

  MARK_AS_DELIVERY_SUPPLIER_ORDER: "mark-orders-as-delivered/",
  GET_SUPPLIER_ORDERS: "supplier-pending-product-list/",
  RESURANT_SHIPPED_PEODUCT_LIST:"restaurant-shipped-product-list/"
};

export const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyNjQwNzQzLCJqdGkiOiIyMzNjYzExMTQyOTY0MWZmYmNkMGExMWQ4YWU4ODI4MSIsInVzZXJfaWQiOjR9.IHx5OirlN7MMQiXlK_I6u71xrIvD1rOQEwfau_TX_8";

export const CREDENTIALS = {
  username: "rest1",
  password: "Shreeji@1",
};
