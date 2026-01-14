const router = require("express").Router();
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// GET product by id
router.get("/:id", async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ message: "Product not found" });
  res.json(p);
});

// ADMIN create product
router.post("/", protect, admin, async (req, res) => {
  const created = await Product.create(req.body);
  res.status(201).json(created);
});

// ADMIN delete product
router.delete("/:id", protect, admin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
