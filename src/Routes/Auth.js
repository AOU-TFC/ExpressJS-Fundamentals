// Importing the express module
const express = require("express");

// Creating a router object
const router = express.Router();

// Importing the generateToken function from the AuthService module
const { generateToken } = require("../Services/AuthService");

// Defining a POST route for user login
router.post("/api/auth/login", (req, res) => {
  // Extracting username and password from the request body
  const { username, password } = req.body;

  // Checking if the username and password are correct
  if (username === "bob" && password === "1234") {
    // Creating a payload object containing user details
    const payload = {
      userId: 1,
      role: "admin"
    };

    // Generating a token using the payload
    const token = generateToken(payload);

    // Sending a success response with the generated token
    return res.status(200).json({
      token: token
    });
  }

  // Sending an error response if the username or password is incorrect
  return res.status(400).json({
    message: "invalid username or password"
  });
});

// Exporting the router object so it can be used in other parts of the application
module.exports = router;
