require("dotenv").config();

const axios = require("axios");

async function testTMDB() {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          query: "Inception"
        },
        timeout: 15000
      }
    );

    console.log("TMDB connection successful");
    console.log("Movies found:", response.data.results.length);
  } catch (error) {
    console.log("Error code:", error.code);
    console.log("Error message:", error.message);
    console.log("Status:", error.response?.status);
    console.log("Response:", error.response?.data);
  }
}

testTMDB();