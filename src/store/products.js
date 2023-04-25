import { axiosRequest } from "../axios";

export default function products(state = [], action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.products;
    default:
      return state;
  }
}

export const getProducts = () => {
  return async (dispatch) => {
    const { data: products } = await axiosRequest.get("/api/products");

    dispatch({
      products,
      type: "GET_PRODUCTS",
    });
  };
};
