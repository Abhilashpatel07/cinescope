 const axios = require("axios");

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  timeout: 15000,
  params: {
    api_key: process.env.TMDB_API_KEY
  }
});

console.log(
  "TMDB API key loaded:",
  Boolean(process.env.TMDB_API_KEY)
);

// Search movies
exports.searchMovies = async (query) => {
  try {
    const response = await tmdbApi.get("/search/movie", {
      params: {
        query: query,
        include_adult: false,
        language: "en-US",
        page: 1
      }
    });

    return response.data.results;
  } catch (error) {
    console.error(
      "TMDB search error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// Get movie details
exports.getMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
        language: "en-US"
      }
    });

    return response.data;
  } catch (error) {
    console.error(
      "TMDB details error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// Get official movie trailer
exports.getMovieTrailer = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}/videos`, {
      params: {
        language: "en-US"
      }
    });

    const videos = response.data.results || [];

    // Prefer official YouTube trailers
    const trailer =
      videos.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer" &&
          video.official
      ) ||
      videos.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer"
      );

    return trailer || null;

  } catch (error) {
    console.error(
      "TMDB trailer error:",
      error.response?.data || error.message
    );

    throw error;
  }
};
