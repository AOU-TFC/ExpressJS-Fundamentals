// Function to retrieve a product's details
function getProducts() {
  // Returning an object with product details
  return {
    name: "salads", // Product name
    price: 20, // Product price
    currency: "USD" // Currency in which the price is denoted
  };
}

// Function to create a product
function createProduct() {
  // Logging a message to indicate that a product has been created
  console.log("Product created");
}

// Exporting the getProducts and createProduct functions
module.exports = {
  getProducts, // Exporting the getProducts function
  createProduct // Exporting the createProduct function
};
