const express = require("express");

const router = express.Router();

// Login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Register page
router.get("/register", (req, res) => {
  res.render("register");
});

// Temporary login handler
router.post("/login", (req, res) => {
  res.send("Login functionality coming soon.");
});

// Temporary register handler
router.post("/register", (req, res) => {
  res.send("Registration functionality coming soon.");
});

module.exports = router;