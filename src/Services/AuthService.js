// Middleware function to verify user authorization
function verifyUser(req, res, next) {
  // Extract the authorization header value
  const password = req.headers.authorization;

  // Check if the extracted password matches the expected value
  if (password === "123") {
    // If the password matches, call the next middleware function
    next();
    return; // Return to ensure no further code in the function is executed
  }

  // If the password does not match, send a 401 Unauthorized response
  return res.status(401).json({
    message: "unauthorized",
  });
}

// Export the verifyUser middleware function
module.exports = verifyUser;
