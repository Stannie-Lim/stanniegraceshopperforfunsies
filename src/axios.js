import axios from "axios";

export const axiosRequest = axios.create({ baseURL: "http://localhost:4000/" });
export const axiosAuthenticatedRequest = {
  get: (url) =>
    axios.get(`http://localhost:4000${url}`, {
      headers: { authorization: window.localStorage.getItem("token") },
    }),
  post: (url, body) =>
    axios.post(`http://localhost:4000${url}`, body, {
      headers: { authorization: window.localStorage.getItem("token") },
    }),
  put: (url, body) =>
    axios.put(`http://localhost:4000${url}`, body, {
      headers: { authorization: window.localStorage.getItem("token") },
    }),
};
