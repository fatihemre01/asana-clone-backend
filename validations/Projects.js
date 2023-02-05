const Joi = require("joi");

const projectSchema = Joi.object({
  name: Joi.string().required().min(3),
});

module.exports = {
  projectSchema,
};
