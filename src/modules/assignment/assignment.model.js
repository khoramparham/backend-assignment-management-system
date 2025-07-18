const { Schema, model } = require("mongoose");

const AssignmentSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    createdBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
const AssignmentModel = model("assignment", AssignmentSchema);
module.exports = AssignmentModel;
