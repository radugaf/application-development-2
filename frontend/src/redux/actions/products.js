import axios from "axios";
import { toastr } from "react-redux-toastr";
import requests, { BACKEND_URL, TOKEN } from "../../requests";
import { useHistory } from "react-router-dom";

/** Product Start */
// Product Fetch
export const ProductFetch = () => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const productData = await axios.get(
        `${BACKEND_URL}${requests.SUPPLIER_PRODUCT_LIST}`,
        tokenConfig(getState)
      );
      console.log({ productData });
      dispatch({ type: "GET_PRODUCTS", payload: productData.data });
    } catch (error) {
      console.log({ error });

      errorHandle(error, dispatch);
    }
  };
};

/** Product End */

/** Carts Start  */
// Fetch Cart
export const GetAddToCart = () => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const CartProduct = await axios.get(
        `${BACKEND_URL}${requests.GET_RESTAURANT_ADD_CART}`,
        tokenConfig(getState)
      );
      console.log({ CartProduct });
      dispatch({ type: "ADD_TO_CART", payload: CartProduct.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

// Add To Cart
export const AddToCart = (data) => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const addToCartProduct = await axios.post(
        `${BACKEND_URL}${requests.SUPPLIER_ADD_PRODUCT_IN_CART}`,
        {
          product_id: data.product_id,
        },
        tokenConfig(getState)
      );
      console.log({ addToCartProduct });
      // dispatch({ type: "ADD_TO_CART", payload: addToCartProduct.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

// Update Cart
export const UpdateCart = (data) => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const updateCartProduct = await axios.post(
        `${BACKEND_URL}${requests.UPDATE_RESTAURANT_ADD_CART}`,
        {
          product_item_id: data.product_id,
          quantity: data.quantity,
          price: data.price,
        },
        tokenConfig(getState)
      );
      console.log({ updateCartProduct });
      // dispatch({ type: "ADD_TO_CART", payload: addToCartProduct.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

// Delete Cart
export const DeleteCart = (data) => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const deleteCartProduct = await axios.post(
        `${BACKEND_URL}${requests.DELETE_RESTAURANT_ADD_CART}`,
        {
          product_item_id: data.product_id,
        },
        tokenConfig(getState)
      );
      console.log({ deleteCartProduct });
      // dispatch({ type: "ADD_TO_CART", payload: addToCartProduct.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

/** Carts End */

/** Inquiries Start */
// Fetch Inquiries
export const GetInquires = () => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const Inquires = await axios.get(
        `${BACKEND_URL}${requests.GET_SUPPLIER_INQUIRES}`,
        tokenConfig(getState)
      );
      console.log({ Inquires });
      dispatch({ type: "GET_INQUIRES", payload: Inquires.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

// Add Inquiry
export const AddInquiry = (data) => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const addInquire = await axios.post(
        `${BACKEND_URL}${requests.ADD_RESTAURANT_INQUIRES}`,
        {
          product_items: data.product_id,
        },
        tokenConfig(getState)
      );
      console.log({ addInquire });
      // dispatch({ type: "ADD_TO_CART", payload: addToCartProduct.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

//  Update Inquiry
export const UpdateInquiry = (data) => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const updateInquiry = await axios.post(
        `${BACKEND_URL}${requests.UPDATE_SUPPLIER_INQUIRES}`,
        {
          product_item_id: data.product_id,
          enquiry_id: data.inquiry_id,
          price: data.price,
          quantity: data.quantity,
        },
        tokenConfig(getState)
      );
      console.log({ updateInquiry });
      // dispatch({ type: "ADD_TO_CART", payload: addToCartProduct.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

// Decline Inquiry
export const DeclineInquiry = (data) => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const declineInquiry = await axios.post(
        `${BACKEND_URL}${requests.DELETE_RESTAURANT_ADD_CART}`,
        {
          product_item_id: data.product_id,
          enquiry_id: data.inquiry_id,
        },
        tokenConfig(getState)
      );
      console.log({ declineInquiry });
      // dispatch({ type: "ADD_TO_CART", payload: addToCartProduct.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};
/** Inquiries End */

/** Orders Start */
// Fetch Supplier Order
export const GetSupplierOrder = () => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const supplierOrders = await axios.get(
        `${BACKEND_URL}${requests.GET_SUPPLIER_ORDERS}`,
        tokenConfig(getState)
      );
      console.log({ supplierOrders });
      dispatch({ type: "GET_SUPPLIER_ORDERS", payload: supplierOrders.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

// Fetch Restaurant Order
export const GetRestaurantOrder = () => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const restaurantOrders = await axios.get(
        `${BACKEND_URL}${requests.GET_RESTAURANT_ORDERS}`,
        tokenConfig(getState)
      );
      console.log({ restaurantOrders });
      dispatch({
        type: "GET_RESTAURANT_ORDERS",
        payload: restaurantOrders.data,
      });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

// Mark as Delivery
export const MarkAdDelivery = (data) => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const markAsADelivery = await axios.post(
        `${BACKEND_URL}${requests.MARK_AS_DELIVERY_SUPPLIER_ORDER}`,
        {
          //TODO: This is in array
          product_items: data.product_id,
        },
        tokenConfig(getState)
      );
      console.log({ markAsADelivery });
      // dispatch({ type: "ADD_TO_CART", payload: addToCartProduct.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

// Place Order
export const PlaceOrder = (data) => {
  return async (dispatch, getState) => {
    // Loading
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const placeOrder = await axios.post(
        `${BACKEND_URL}${requests.PLACE_ORDER_RESTAURANT_ORDER}`,
        {
          //TODO: This is in array
          product_items: data.product_id,
        },
        tokenConfig(getState)
      );
      console.log({ placeOrder });
      // dispatch({ type: "ADD_TO_CART", payload: addToCartProduct.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

/** Orders End */

/** Auth Start*/

// Get Access Token
export const SetToken = (data) => {
  return async (dispatch, getState) => {
    // Loading
    console.log({ data });
    dispatch({
      type: "PRODUCT_LOADING",
    });
    //   Get Token from state

    try {
      const token = await axios.post(`${BACKEND_URL}${requests.GET_TOKEN}`, {
        username: data.username,
        password: data.password,
      });
      console.log({ token });
      localStorage.setItem("token", token.data.access);
      console.log({ token: localStorage.getItem("token") });
      // dispatch({ type: "TOKEN", payload: token.data });
    } catch (error) {
      console.log({ error });
      errorHandle(error, dispatch);
    }
  };
};

/** Auth End*/

/** Common Actions */
// Error Handle
export const errorHandle = (error, dispatch) => {
  if (
    error &&
    error.response &&
    error.response.data &&
    (error.response.data.messages || error.response.data.detail)
  )
    toastr.error(
      (error.response.data.messages &&
        error.response.data.messages[0] &&
        error.response.data.messages[0].message) ||
        error.response.data.detail
    );
  dispatch({
    type: "AUTH_ERROR",
    payload: error,
  });
};

// Handle Token
export const tokenConfig = (getState) => {
  // const token = TOKEN;
  // const token = getState().products.token || TOKEN;
  const token = localStorage.getItem("token") || TOKEN;
  console.log({ tokenConfig: token });

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if Token , add to headers config
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
