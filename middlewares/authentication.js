const jwt = require("jsonwebtoken");

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.send({ error: "Please provie a token" });
  }
  jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
    if (err) return res.send({ err });
    req.user = user;
    next();
  });
};

module.exports = {
  authenticateJwt,
};
