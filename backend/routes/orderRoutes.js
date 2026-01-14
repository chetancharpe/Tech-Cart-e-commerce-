const router = require("express").Router();
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

// create order
router.post("/", protect, async (req, res) => {
  const order = await Order.create({
    user: req.user._id,
    ...req.body
  });
  res.status(201).json(order);
});

// my orders
router.get("/my", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
});

module.exports = router;
