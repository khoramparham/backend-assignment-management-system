const { Schema, model } = require("mongoose");

const AssignmentSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    createdBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
    submissions: [{ type: Schema.Types.ObjectId, ref: "submission", required: true }],
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
exports.AssignmentSchema = AssignmentSchema;
const AssignmentModel = model("assignment", AssignmentSchema);
module.exports = AssignmentModel;
