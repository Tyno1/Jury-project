const express = require("express");
const router = express.Router();
const controller = require("../controllers/reviewController");

router.post("/", controller.create);
router.get("/game/:gameId", controller.findByGameId);
router.get("/all", controller.findAll);
router.get("/:id", controller.findById);
router.delete("/:id", controller.deleteReview);


module.exports = router;
