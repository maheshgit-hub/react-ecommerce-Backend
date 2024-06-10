const express = require("express");
const {
  updateOrder,
  createOrder,
  fetchOrdersByUser,
  deleteOrder,
} = require("../controller/Order");

const router = express.Router();
router
  .post("/", createOrder)
  .get("/", fetchOrdersByUser)
  .delete("/:id", deleteOrder)
  .patch("/:id", updateOrder);

exports.router = router;
