const express = require("express");
const router = express.Router();
const { getProducts, createProduct } = require("../Services/ProductsService");
const { authenticate, authorize } = require("../Services/AuthService");
const tryCatch = require("../Services/utils/tryCatch");

// GET /products endpoint with authentication and authorization middleware
router.get(
  "/products",
  authenticate, // Middleware to authenticate user
  authorize(["admin", "staff"]), // Middleware to authorize user roles
  tryCatch((req, res) => {
    // Middleware to handle errors in synchronous functions
    const json = getProducts(); // Call to service to fetch products
    return res.status(200).json(json); // Respond with JSON data
  })
);

// POST /products endpoint with authentication and admin authorization
router.post("/products", authenticate, authorize(["admin"]), (req, res) => {
  try {
    const body = req.body; // Extract request body
    createProduct(); // Call to service to create a product
    return res.status(201).json({
      message: "Product created"
    });
  } catch (err) {
    next(err); // Pass any errors to the error handling middleware
  }
});

// PUT /products endpoint with authentication
router.put("/products", authenticate, (req, res) => {
  const body = req.body; // Extract request body
  console.log(body.name); // Log the product name to console
  return res.status(201).json({
    message: "Product created"
  });
});

// GET /products/test endpoint with authentication and error handling middleware
router.get(
  "/products/test",
  authenticate,
  tryCatch((req, res) => {
    // Placeholder route with no functionality
  })
);

// DELETE /products endpoint with authentication
router.delete("/products", authenticate, (req, res) => {
  const body = req.body; // Extract request body
  console.log(body.name); // Log the product name to console
  return res.status(201).json({
    message: "Product created"
  });
});

module.exports = router; // Export the router module for use in other files
