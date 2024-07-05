// Custom error handling middleware for Express

const errorHandler = (error, req, res, next) => {
  // Send a response with status 500 (Internal Server Error)
  return res.status(500).json({
    message: "something went wrong" // Generic error message
  });
};

// Export the error handler to be used in other parts of the application
module.exports = errorHandler;
