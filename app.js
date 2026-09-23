require("dotenv").config();

const express = require("express");
const path = require("path");

const movieRoutes = require("./routes/movieRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", movieRoutes);
app.use("/auth", authRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Page Not Found"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`CineScope running at http://localhost:${PORT}`);
});