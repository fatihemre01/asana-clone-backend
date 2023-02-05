const jwt = require("jsonwebtoken");

const generateAccessToken = (userEmail) => {
  return jwt.sign({ userEmail }, process.env.JWT_ACCESS_KEY);
};

const generateRefreshToken = (userEmail) => {
  return jwt.sign({ userEmail }, process.env.JWT_REFRESH_KEY);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
