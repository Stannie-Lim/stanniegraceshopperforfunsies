const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/static", express.static(path.join(__dirname, "../static")));

app.use("/api/auth", require("./api/auth"));
app.use("/api/products", require("./api/products"));
app.use("/api/cart", require("./api/cart"));

module.exports = app;
