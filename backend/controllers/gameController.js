const Game = require("../models/game");
const Reviews = require("../models/gameReview");
const mongoose = require("mongoose");
const cloudinary = require("../cloudinary/cloudinary");

module.exports.create = async (req, res, next) => {
  try {
    const { name, description, imageUrl, rating, gamePlatform } = req.body;
    const existingGame = await Game.findOne({ name });

    if (existingGame) throw new Error("A game with that name already exists");
    if (!name) throw new Error("No name provided");
    if (!description) throw new Error("No description provided");
    if (!imageUrl) throw new Error("No image provided");
    if (!gamePlatform) throw new Error("No gamePlatform provided");

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    let response = await cloudinary.uploader.upload(imageUrl, options);

    const newGame = new Game({
      name,
      description,
      imageUrl: response.url,
      rating,
      gamePlatform,
    });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error?.message });
  }
};

// Read all games
module.exports.findAll = async (req, res, next) => {
  try {
    const games = await Game.find();

    const total = games.map(async (game) => {
      const reviews = await Reviews.find({ gameId: game._id });
      let averageRating = 0;

      if (reviews.length > 0) {
        const totalRating = reviews.reduce(
          (accum, review) => accum + (Number(review?.rating) || 0),
          0
        );
        averageRating = totalRating / reviews.length;
      }

      return { ...game._doc, rating: averageRating };
    });

    const response = await Promise.all(total);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// read game by id
module.exports.findById = async (req, res, next) => {
  try {
    const gameId = req.params.id;

    // Validate if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(gameId)) {
      return res.status(400).json({ error: "Invalid Game ID" });
    }

    const game = await Game.findById(gameId);

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    const reviews = await Reviews.find({ gameId: game._id });
    let averageRating = 0;

    if (reviews.length > 0) {
      const totalRating = reviews.reduce(
        (accum, review) => accum + (Number(review?.rating) || 0),
        0
      );
      averageRating = totalRating / reviews.length;
    }

    let response = { ...game._doc, rating: averageRating };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//update game by id
module.exports.updateGame = async (req, res) => {
  try {
    const { name, description, imageUrl, rating, gamePlatform } = req.body;
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      { name, description, imageUrl, rating, gamePlatform },
      { new: true }
    );
    if (!updatedGame) {
      res.status(404).json({ error: "Game not found" });
      return;
    }
    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a review
module.exports.deleteGame = async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    if (!deletedGame) {
      res.status(404).json({ error: "Game not found" });
      return;
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
