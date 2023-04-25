import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import auth from "./auth";
import products from "./products";
import cart from "./cart";

const reducer = combineReducers({
  auth,
  products,
  cart,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export * from "./auth";
export * from "./products";
export * from "./cart";
