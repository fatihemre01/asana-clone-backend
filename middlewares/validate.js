const JoiValidate = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);
  if (error) {
    const msg = error.details[0].message;
    return res.send({ error: msg });
  }
  Object.assign(req, value);
  return next();
};

module.exports = {
  JoiValidate,
};
