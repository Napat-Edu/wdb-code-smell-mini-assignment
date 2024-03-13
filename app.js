const express = require("express");

const productsRoute = require("./routes/products");
const totalRoute = require("./routes/total");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/", productsRoute);
app.all("/total", totalRoute);

module.exports = app;
