export const URL = "http://localhost:8000";
export const BACKEND_URL = `${URL}/api/v1/`;

export default {
  //   Auth
  GET_TOKEN: "token/",
  //   Product
  SUPPLIER_PRODUCT_LIST: "product-list/",
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
  MARK_AS_DELIVERY_SUPPLIER_ORDER: "mark-orders-as-delivered/",
  GET_SUPPLIER_ORDERS: "supplier-pending-product-list/",
};

export const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA4MjI4OTk1LCJqdGkiOiJkZjQ4ODZlNTViNWM0OWQ5ODA2NzRjOTMzNGQ4NWIyNCIsInVzZXJfaWQiOjJ9.cxnvekZmwCQ-mzgYAtyqqrF1QJU7tM_xKJtL4Q8hEaY";
