const User = require("../models/Users");

const registerService = (data) => {
  const user = new User(data);
  return user.save();
};

const loginService = (data) => {
  return User.findOne({ email: data.email });
};

module.exports = {
  registerService,
  loginService,
};
