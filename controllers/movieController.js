const tmdbService = require("../services/tmdbService");

// Homepage
exports.getHomePage = async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.error(error.message);

    res.status(500).send("Something went wrong.");
  }
};

// Search movies
exports.searchMovies = async (req, res) => {
  try {
    const query = req.query.query?.trim();

    if (!query) {
      return res.render("search", {
        query: "",
        movies: []
      });
    }

    const movies = await tmdbService.searchMovies(query);

    res.render("search", {
      query,
      movies
    });

  } catch (error) {
    console.error("Search error:", error.message);

    res.status(500).send("Unable to search movies.");
  }
};

// Movie details
exports.getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await tmdbService.getMovieDetails(id);

    if (!movie) {
      return res.status(404).send("Movie not found.");
    }

    res.render("movie-details", {
      movie
    });

  } catch (error) {
    console.error("Details error:", error.message);

    res.status(500).send("Unable to load movie details.");
  }
};