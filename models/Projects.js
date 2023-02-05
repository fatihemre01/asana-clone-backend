const mongoose = require("mongoose");
const logger = require("../scripts/logger/Projetcs");

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true, versionKey: false }
);

ProjectSchema.post("save", (object) => {
  logger.log({
    level: "info",
    message: object,
  });
});

module.exports = mongoose.model("project", ProjectSchema);
