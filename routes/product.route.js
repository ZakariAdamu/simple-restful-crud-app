const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
} = require("../controllers/product.controller.js");

// API specific endpoints for all the CRUD practices
// read all products
router.get("/", getProducts);

// read 1 product by it's id
router.get("/:id", getProduct);

// post a product
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
