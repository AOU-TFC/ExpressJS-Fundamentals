const express = require("express");
const router = express.Router();
const { getProducts, createProduct } = require("../Services/ProductsService");
const { authenticate, authorize } = require("../Services/AuthService");
const tryCatch = require("../Services/utils/tryCatch");

router.get(
  "/products",
  authenticate,
  authorize(["admin", "staff"]),
  tryCatch((req, res) => {
    const json = getProducts();
    return res.status(200).json(json);
  })
);

router.post("/products", authenticate, authorize(["admin"]), (req, res) => {
  try {
    const body = req.body;
    createProduct();
    return res.status(201).json({
      message: "Product created"
    });
  } catch (err) {
    next(err);
  }
});

router.put("/products", authenticate, (req, res) => {
  const body = req.body;
  console.log(body.name);
  return res.status(201).json({
    message: "Product created"
  });
});

router.get("/products/test", authenticate, tryCatch((req, res) => {}));

router.delete("/products", authenticate, (req, res) => {
  const body = req.body;
  console.log(body.name);
  return res.status(201).json({
    message: "Product created"
  });
});

module.exports = router;
