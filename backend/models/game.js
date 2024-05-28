const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const gameSchema = new Schema({
  name: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  gamePlatform: {
    type: [String],
    required: true,
  },
});

module.exports = model("Game", gameSchema);
