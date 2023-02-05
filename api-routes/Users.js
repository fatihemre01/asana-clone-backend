const router = require("express").Router();

const { registerSchema, loginSchema } = require("../validations/Users");
const { JoiValidate } = require("../middlewares/validate");

const { registerController, loginController } = require("../controllers/Users");

router.post("/register", JoiValidate(registerSchema), registerController);
router.post("/login", JoiValidate(loginSchema), loginController);

module.exports = router;
