import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "./components/Login";
import { Homepage } from "./components/Homepage";

function App() {
  useEffect(() => {}, []);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
