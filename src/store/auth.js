import { axiosAuthenticatedRequest, axiosRequest } from "../axios";

const auth = (state = null, action) => {
  if (action.type === "SET_AUTH") {
    return action.auth;
  }
  return state;
};

export const logout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("token");
    dispatch({ type: "SET_AUTH", auth: null });
  };
};

export const loginWithToken = (givenToken) => {
  return async (dispatch) => {
    const token = givenToken || window.localStorage.getItem("token");
    if (token) {
      try {
        const response = await axiosRequest.get("/api/auth", {
          headers: {
            authorization: token,
          },
        });

        dispatch({ type: "SET_AUTH", auth: response.data });
      } catch (error) {
        throw error;
      }
    }
  };
};

export const updateAuth = (auth) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axiosRequest.put("/api/auth", auth, {
      headers: {
        authorization: token,
      },
    });

    dispatch({ type: "SET_AUTH", auth: response.data });
  };
};

export const attemptLogin = (credentials) => {
  return async (dispatch) => {
    const response = await axiosRequest.post("/api/auth", credentials);
    window.localStorage.setItem("token", response.data);

    dispatch(loginWithToken());
  };
};

export const register = (credentials) => {
  return async (dispatch) => {
    const response = await axiosRequest.post("/api/auth/register", credentials);
    window.localStorage.setItem("token", response.data);
    dispatch(loginWithToken());
  };
};

export default auth;
