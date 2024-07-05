const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const Products = require("./Routes/Prodcuts");
const Auth = require("./Routes/Auth");
const errorHandler = require("./Services/utils/errorHandler");
app.use(Products);
app.use(Auth);

app.use(errorHandler);
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});
