// Middleware function to wrap controller functions with error handling
const tryCatch = controller => (req, res, next) => {
  try {
    // Execute the provided controller function with request and response objects
    controller(req, res);
  } catch (err) {
    // If an error occurs during execution, pass it to the next middleware in the chain
    next(err);
  }
};

// Export the tryCatch middleware function for use in other modules
module.exports = tryCatch;
