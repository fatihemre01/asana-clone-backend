const { registerService, loginService } = require("../services/Users");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/generateJwt");

const registerController = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const user = await registerService(req.body);

  const tokens = {
    access_token: generateAccessToken(user.email),
    refresh_token: generateRefreshToken(user.email),
  };

  res.status(200).send(tokens);
};

const loginController = async (req, res) => {
  const user = await loginService(req.body);
  if (!user) return res.send("Wrong email");
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) return res.send("Wrong password");

  const tokens = {
    access_token: generateAccessToken(user.email),
    refresh_token: generateRefreshToken(user.email),
  };

  res.status(200).send(tokens);
};

module.exports = {
  registerController,
  loginController,
};
