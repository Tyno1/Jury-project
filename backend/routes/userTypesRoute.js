const express = require("express");
const router = express.Router();
const controller = require("../controllers/userTypeController");
const adminMiddleware = require("../middlewares/admin");


router.get("/all", adminMiddleware, controller.findAll);
router.post("/", adminMiddleware, controller.create);
router.get("/:id", controller.findById);


module.exports = router;