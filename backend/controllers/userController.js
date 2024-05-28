const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const UserType = require("../models/userType");

// Signup route
module.exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userType = await UserType.findOne({ name: "USER" });

    const user = new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      userType: userType._id,
    });
    await user.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Login route
module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).populate(
      "userType"
    );

    if (!user) {
      return res.status(401).send("Invalid email or password");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send("Invalid email or password");
    }
    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      "your_secret_key"
    );
    res.status(200).send({
      token,
      user: {
        username: user.username,
        email: user.email,
        fullName: `${user.firstName} ${user.lastName}`,
        _id: user._id,
      },
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Read all users
module.exports.findAll = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
