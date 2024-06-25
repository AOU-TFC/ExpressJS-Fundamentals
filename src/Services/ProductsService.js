// Function to get product details
function getProducts() {
  // Return a product object with name, price, and currency properties
  return {
    name: "salads",
    price: 20,
    currency: "USD",
  };
}

// Function to create a product (currently just logs a message)
function createProduct() {
  // Log a message indicating a product has been created
  console.log("Product created");
}

// Export the getProducts and createProduct functions as part of the module
module.exports = {
  getProducts,
  createProduct,
};
