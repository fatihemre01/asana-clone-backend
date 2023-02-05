const Joi = require("joi");

const registerSchema = Joi.object({
  full_name: Joi.string().required().min(3),
  email: Joi.string().required().min(3),
  password: Joi.string().required().min(3),
});

const loginSchema = Joi.object({
  email: Joi.string().required().min(3),
  password: Joi.string().required().min(3),
});

module.exports = {
  registerSchema,
  loginSchema,
};
