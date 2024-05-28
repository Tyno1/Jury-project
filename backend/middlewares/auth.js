const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get token from request header
  const token = req.header("Authorization").split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied", status: 401 });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, "your_secret_key");
    req.user = decoded.user; // Add user from payload to request object
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid", error });
  }
};

module.exports = authMiddleware;
