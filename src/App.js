import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Login } from "./components/Login";
import { Nav } from "./components/Nav";
import { Homepage } from "./components/Homepage";
import { Cart } from "./components/Cart";

import { getProducts, loginWithToken, getCart } from "./store";

function App() {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loginWithToken(window.localStorage.getItem("token")));
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (auth) {
      dispatch(getCart());
    }
  }, [auth]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
