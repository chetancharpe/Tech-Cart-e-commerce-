const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "Signup Successful" });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) res.json({ message: "Login Success" });
  else res.status(401).json({ message: "Invalid Credentials" });
});

module.exports = router;
