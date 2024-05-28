const jwt = require("jsonwebtoken");
const UserType = require("../models/userType");

const adminMiddleware = async (req, res, next) => {
  try {
    // Get token from request header
    const token = req.header("Authorization").split(" ")[0];

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied", status: 401 });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, "your_secret_key");
      req.user = decoded.user; // Add user from payload to request object
      console.log(decoded);
      const admin = await UserType.findOne({ _id: decoded.userType });

      if (admin.name.toLowerCase() !== "admin")
        throw new Error("Unauthorized access");
      next();
    } catch (error) {
      res
        .status(401)
        .json({ message: "Token is not valid", error: error?.message });
    }
  } catch (err) {
    res.status(401).json({ message: "An error occured", error: err?.message });
  }
};

module.exports = adminMiddleware;
