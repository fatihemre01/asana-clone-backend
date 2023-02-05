const { list, insert } = require("../services/Projects");

const index = async (req, res) => {
  const response = await list();
  res.status(200).send(response);
};

const create = async (req, res) => {
  const response = await insert(req.body);
  res.status(200).send(response);
};

module.exports = {
  index,
  create,
};
