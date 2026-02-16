const express = require("express")
const router = express.Router()
const User = require("../models/Users.js")


router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }

    res.status(400).json({
      message: "Validation failed",
      error: error.message
    });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message
    });
  }
});

module.exports = router