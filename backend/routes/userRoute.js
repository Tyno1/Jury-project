const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const adminMiddleware = require("../middlewares/admin");


router.post("/signup", controller.register);
router.post("/login", controller.login);
router.get("/all", adminMiddleware, controller.findAll);


module.exports = router;