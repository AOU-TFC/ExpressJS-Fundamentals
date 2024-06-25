// Import the express module and create a router instance
const express = require("express");
const router = express.Router();

// Import functions from the ProductsService module
const { getProducts, createProduct } = require("../Services/ProductsService");

// Import the verifyUser middleware function from the AuthService module
const verifyUser = require("../Services/AuthService");

// Define a GET route to retrieve products
router.get("/products", (req, res) => {
  // Call the getProducts function to get product details
  const json = getProducts();
  // Send the product details as a JSON response with a 200 OK status
  return res.status(200).json(json);
});

// Define a POST route to create a new product, with user verification
router.post("/products", verifyUser, (req, res) => {
  // Extract the request body (not used in current implementation)
  const body = req.body;
  // Call the createProduct function to create a new product
  createProduct();
  // Send a response indicating the product was created, with a 201 Created status
  return res.status(201).json({
    message: "Product created",
  });
});

// Define a PUT route to update a product (implementation logs the product name)
router.put("/products", (req, res) => {
  // Extract the request body
  const body = req.body;
  // Log the name of the product being updated
  console.log(body.name);
  // Send a response indicating the product was updated, with a 201 Created status
  return res.status(201).json({
    message: "Product updated",
  });
});

// Define a DELETE route to delete a product (implementation logs the product name)
router.delete("/products", (req, res) => {
  // Extract the request body
  const body = req.body;
  // Log the name of the product being deleted
  console.log(body.name);
  // Send a response indicating the product was deleted, with a 201 Created status
  return res.status(201).json({
    message: "Product deleted",
  });
});

// Export the router instance to be used in other parts of the application
module.exports = router;
