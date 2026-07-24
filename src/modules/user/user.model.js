const { Schema, model } = require("mongoose");

const OtpSchema = new Schema({
  code: { type: String, require: false, default: null },
  expiresIn: { type: Number, require: false, default: 0 },
});
const UserSchema = new Schema(
  {
    fullName: { type: String, require: false },
    mobile: { type: String, require: true },
    otp: { type: OtpSchema },
    role: { type: String },
    accessToken: { type: String },
  },
  { timestamps: true }
);
const UserModel = model("user", UserSchema);
module.exports = UserModel;
