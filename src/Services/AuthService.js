// Importing the jsonwebtoken library
const jwt = require("jsonwebtoken");

// Loading environment variables from a .env file
require("dotenv").config();

/**
 * Middleware to authenticate a request by validating the provided JWT token.
 */
const authenticate = (req, res, next) => {
  // Retrieving the token from the request headers
  const token = req.headers.authorization;

  // Validating the token
  const { valid, decodedToken } = validateToken(token);

  // If the token is not valid, return a 401 unauthorized response
  if (!valid) {
    return res.status(401).json({
      message: "unauthorized"
    });
  }

  // If the token is valid, attach the user information to the request object
  req.userId = decodedToken.userId;
  req.role = decodedToken.role;

  // Call the next middleware or route handler
  next();
};

/**
 * Middleware to authorize a request based on the user's role.
 * @param {Array} allowedRoles - Array of roles that are allowed to access the route.
 */
const authorize = allowedRoles => (req, res, next) => {
  // If the user's role is not in the allowed roles, return a 401 unauthorized response
  if (!allowedRoles.includes(req.role)) {
    return res.status(401).json({
      message: "action is not allowed for this role"
    });
  }

  // Call the next middleware or route handler
  next();
};

/**
 * Function to validate a JWT token.
 * @param {string} token - The JWT token to validate.
 * @returns {Object} - An object containing a valid flag and the decoded token if valid.
 */
const validateToken = token => {
  try {
    // Retrieving the secret key from environment variables
    const secretKey = process.env.SECRET_KEY;

    // Verifying and decoding the token
    const decodedToken = jwt.verify(token, secretKey);

    // Returning the decoded token and a valid flag
    return {
      valid: true,
      decodedToken
    };
  } catch (err) {
    // Logging the error and returning an invalid flag
    console.log(err);
    return {
      valid: false
    };
  }
};

/**
 * Function to generate a JWT token.
 * @param {Object} payload - The payload to include in the JWT token.
 * @returns {string} - The generated JWT token.
 */
const generateToken = payload => {
  // Retrieving the secret key from environment variables
  const secretKey = process.env.SECRET_KEY;

  // Signing the payload to generate a token
  const token = jwt.sign(payload, secretKey);

  // Returning the generated token
  return token;
};

// Exporting the authenticate, generateToken, and authorize functions
module.exports = {
  authenticate,
  generateToken,
  authorize
};
