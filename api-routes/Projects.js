const router = require("express").Router();

const { projectSchema } = require("../validations/Projects");
const { JoiValidate } = require("../middlewares/validate");

const { index, create } = require("../controllers/Projects");
const { authenticateJwt } = require("../middlewares/authentication");

router.get("/", index);
router.post("/", authenticateJwt, JoiValidate(projectSchema), create);

module.exports = router;
