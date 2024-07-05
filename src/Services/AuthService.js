const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  const { valid, decodedToken } = validateToken(token);
  if (!valid) {
    return res.status(401).json({
      message: "unauthorized"
    });
  }
  req.userId = decodedToken.userId;
  req.role = decodedToken.role;
  next();
};

const authorize = allowedRoles => (req, res, next) => {
  if (!allowedRoles.includes(req.role)) {
    return res.status(401).json({
      message: "action is not allowed for this role"
    });
  }
  next();
};

const validateToken = token => {
  try {
    const secretKey = process.env.SECRET_KEY;
    const decodedToken = jwt.verify(token, secretKey);
    return {
      valid: true,
      decodedToken
    };
  } catch (err) {
    console.log(err);
    return {
      valid: false
    };
  }
};

const generateToken = payload => {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secretKey);
  return token;
};
module.exports = {
  authenticate,
  generateToken,
  authorize
};
