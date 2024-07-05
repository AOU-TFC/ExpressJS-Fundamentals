// Importing the required modules
const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse incoming JSON requests

// Loading environment variables from a .env file into process.env
require("dotenv").config();

// Importing route handlers
const Products = require("./Routes/Prodcuts");
const Auth = require("./Routes/Auth");

// Importing custom error handling middleware
const errorHandler = require("./Services/utils/errorHandler");

// Using the imported routes
app.use(Products); // Mounting the Products routes
app.use(Auth); // Mounting the Auth routes

// Using the error handling middleware
app.use(errorHandler);

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3030;

// Starting the server
app.listen(PORT, () => {
  // Logging a message to indicate the server is running and listening on the specified port
  console.log(`App is listening on Port ${PORT}`);
});
