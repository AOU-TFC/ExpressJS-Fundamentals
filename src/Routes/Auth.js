const express = require("express");
const router = express.Router();
const { generateToken } = require("../Services/AuthService");

router.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "bob" && password === "1234") {
    const payload = {
      userId: 1,
      role: "admin"
    };
    const token = generateToken(payload);
    return res.status(200).json({
      token: token
    });
  }
  return res.status(400).json({
    message: "invalid username or password"
  });
});

module.exports = router;
