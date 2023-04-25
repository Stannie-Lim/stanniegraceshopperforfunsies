import { axiosAuthenticatedRequest } from "../axios";

export default function cart(state = [], action) {
  switch (action.type) {
    case "SET_CART":
      return action.cart;
    default:
      return state;
  }
}

export const getCart = () => {
  return async (dispatch) => {
    const { data: cart } = await axiosAuthenticatedRequest.get("/api/cart");

    dispatch({
      cart,
      type: "SET_CART",
    });
  };
};

export const addToCart = (product, quantity = 1) => {
  return async (dispatch) => {
    const { data: cart } = await axiosAuthenticatedRequest.post("/api/cart", {
      product,
      quantity,
    });

    dispatch({
      cart,
      type: "SET_CART",
    });
  };
};
