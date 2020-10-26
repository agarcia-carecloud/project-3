const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String },
    password: { type: String },
    email: { type: String },
    profileImage: {
      type: String,
      default: "/public/images/yoda-default-icon.png",
    },
    favorites: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
