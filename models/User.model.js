const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    required: true,
    default: "USER",
  },
  pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
