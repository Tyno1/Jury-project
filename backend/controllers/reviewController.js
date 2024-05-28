const Review = require("../models/gameReview");

// CRUD routes

// Create a review
module.exports.create = async (req, res) => {
  try {
    const { userId, location, gameId, comment, rating } = req.body;
    const newReview = new Review({ userId, location, gameId, comment, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error", message: error });
  }
};

// Read all reviews
module.exports.findAll = async (req, res) => {
  try {
    const reviews = await Review.find().populate("userId").populate("gameId");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read review by game id
module.exports.findByGameId = async (req, res) => {
  try {
    const reviews = await Review.find({ gameId: req.params.gameId }).populate("userId");;
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read a specific review
module.exports.findById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      res.status(404).json({ error: "Review not found" });
      return;
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a review
module.exports.updateReview = async (req, res) => {
  try {
    const { userID, location, game, comment, rating } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { userID, location, game, comment, rating },
      { new: true }
    );
    if (!updatedReview) {
      res.status(404).json({ error: "Review not found" });
      return;
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a review
module.exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      res.status(404).json({ error: "Review not found" });
      return;
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
