const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const locationSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

const gameReviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: {
    type: locationSchema,
    required: true,
  },
  gameId: {
    type: Schema.Types.ObjectId,
    ref: "Game",
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = model("GameReview", gameReviewSchema);
