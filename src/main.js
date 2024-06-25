// Import the express module and create an instance of an Express application
const express = require("express");
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the Products route handler from the ./Routes/Products file
const Products = require("./Routes/Products");

// Use the Products route handler for all requests
app.use(Products);

// TODO: Import the Users route handler (file path is missing)
const Users = require(""); // You need to specify the correct path for the Users route

// Define the port number from an environment variable or default to 3030
const PORT = process.env.PORT || 3030;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});
