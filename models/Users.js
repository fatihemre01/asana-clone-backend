const mongoose = require("mongoose");
const logger = require("../scripts/logger/Projetcs");

const UserSchema = new mongoose.Schema(
  {
    full_name: String,
    email: String,
    password: String,
    profile_picture: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("user", UserSchema);
