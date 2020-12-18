import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
// import argus from "./argus";
// import auth from "./auth";
import products from "./products";

const rootReducer = combineReducers({
  //   argusGeneral: argus,
  toastr: toastrReducer,
  products,
});

export default rootReducer;
