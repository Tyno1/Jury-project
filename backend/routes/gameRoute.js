const express = require("express");
const router = express.Router();
const controller = require("../controllers/gameController");
const authMiddleware = require("../middlewares/auth");
const adminMiddleware = require("../middlewares/admin");

router.get("/all", controller.findAll);
router.post("/", adminMiddleware, controller.create);
router.get("/:id", controller.findById);
router.put("/:id", adminMiddleware, controller.updateGame);
router.delete("/:id", adminMiddleware, controller.deleteGame);


module.exports = router;
