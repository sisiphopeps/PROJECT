const express = require("express");
// import express
//import express from "express";
// import function from controller
//import * as productController from "../controllers/Product";
const productController = require("../controller/product");
// init express router
const router = express.Router();
const {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = productController;
// Get All Product
router.get("/products", showProducts);
// Get Single Product
router.get("/products/:id", showProductById);
// Create New Product
router.post("/products", createProduct);
// Update Product
router.put("/products/:id", updateProduct);
// Delete Product
router.delete("/products/:id", deleteProduct);
// export default router
module.exports = router;

