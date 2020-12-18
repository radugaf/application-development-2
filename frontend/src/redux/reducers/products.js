const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  redirect: false,
  productsDetails: [],
  cartsDetails: [],
  inquiredDetails: [],
  supplierOrdersDetails: [],
  restaurantOrdersDetails: [],
  error: {},
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "PRODUCT_LOADING":
      return { ...state, isLoading: action.payload || true };
    case "STOP_LOADING":
      return { ...state, isLoading: false };
    case "GET_PRODUCTS":
      return { ...state, productsDetails: action.payload };
    case "ADD_TO_CART":
      return { ...state, cartsDetails: action.payload };
    case "GET_INQUIRES":
      return { ...state, inquiredDetails: action.payload };
    case "GET_SUPPLIER_ORDERS":
      return { ...state, supplierOrdersDetails: action.payload };
    case "GET_RESTAURANT_ORDERS":
      return { ...state, restaurantOrdersDetails: action.payload };
    case "AUTH_ERROR":
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
}
