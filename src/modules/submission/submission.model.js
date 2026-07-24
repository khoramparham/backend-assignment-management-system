const { model, Schema } = require("mongoose");

const SubmissionSchema = new Schema({
  student: {
    name: { type: String, require: true },
    phone: { type: String },
    studentCode: { type: String, required: true, trim: true },
    email: { type: String },
  },
  file: {
    filename: { type: String, required: true },
    url: { type: String, required: true },
  },
  assignmentId: { type: Schema.Types.ObjectId, ref: "assignment", required: true },
  submittedAt: { type: Date, default: Date.now },
  isReviewed: { type: Boolean, default: false },
  feedback: { type: String, trim: true, default: "" },
});
const SubmissionModel = model("submission", SubmissionSchema);
module.exports = SubmissionModel;
