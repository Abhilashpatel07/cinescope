const express = require("express");

const router = express.Router();

const movieController = require("../controllers/movieController");

// Homepage
router.get("/", movieController.getHomePage);

// Search movies
router.get("/search", movieController.searchMovies);

// Movie details
router.get("/movie/:id", movieController.getMovieDetails);

module.exports = router;