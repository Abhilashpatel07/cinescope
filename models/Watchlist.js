const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    movieId: {
      type: Number,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    posterPath: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Watchlist", watchlistSchema);