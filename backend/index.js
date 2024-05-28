require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authMiddleware = require("./middlewares/auth");
const userRoutes = require("./routes/userRoute");
const gameRoutes = require("./routes/gameRoute");
const userTypes = require("./controllers/userTypeController");
const userTypesRoutes = require("./routes/userTypesRoute");
const reviewRoutes = require("./routes/reviewRoute");
const cloudinary = require("../backend/cloudinary/cloudinary")

const app = express();
const uri =
  "mongodb+srv://tynoukus:Myproject123@cluster0.mhtgfa6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}))
// Routes
// app.use("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use("/users", userRoutes);
app.use("/userTypes", userTypesRoutes);
app.use("/games", gameRoutes);
app.use("/reviews", reviewRoutes);

// app.use("/game", authMiddleware, gameRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
