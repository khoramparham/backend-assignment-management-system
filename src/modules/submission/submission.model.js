const { model, Schema } = require("mongoose");

const SubmissionSchema = new Schema(
  {
    student: {
      name: { type: String, require: true },
      phone: { type: String },
      studentCode: { type: String, required: true, trim: true },
      email: { type: String },
    },
    file: {
      filename: { type: String, required: true },
      mimetype: { type: String },
      url: { type: String, required: true },
    },
    submittedAt: { type: Date, default: Date.now },
    isReviewed: { type: Boolean, default: false },
    feedback: { type: String, trim: true },
  },
  { _id: false }
);
const SubmissionModel = model("submission", SubmissionSchema);
module.exports = SubmissionModel;
