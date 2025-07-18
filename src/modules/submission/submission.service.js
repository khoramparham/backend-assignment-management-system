const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const SubmissionModel = require("./submission.model");
const { isValidObjectId, Types } = require("mongoose");
const SubmissionMessage = require("./submission.message");
class SubmissionService {
  #model;
  #assignmentModel;
  constructor() {
    autoBind(this);
    this.#model = SubmissionModel;
  }
  async add({ submission: { name, phone, studentCode, email, assignmentId }, file }) {
    const submissionCreate = await this.#model.create({
      student: { name, phone, studentCode, email },
      file: file,
      assignmentId: new Types.ObjectId(assignmentId),
    });
    return submissionCreate;
  }
  async getById(id) {
    const submission = await this.checkExistById(id);
    return submission;
  }
  async getAll(assignmentId) {
    if (!isValidObjectId(assignmentId))
      throw new createHttpError.BadRequest(SubmissionMessage.BadId);
    const assignment = await this.#model.find({ assignmentId });
    return assignment;
  }
  async updateByStudent({
    submission: { id, name, phone, studentCode, email, assignmentId },
    file,
  }) {
    const submission = await this.checkExistById(id);
    const submissionUpdate = await this.#model.updateOne(
      { _id: submission._id },
      {
        $set: {
          student: {
            name: name || submission.name,
            phone: phone || submission.phone,
            studentCode: studentCode || submission.studentCode,
            email: email || submission.email,
          },
          file: file || submission.file,
          assignmentId: new Types.ObjectId(assignmentId) || submission.assignmentId,
        },
      }
    );
    return submissionUpdate;
  }
  async reviewSubmission({ id, isReviewed, feedback }) {
    const submission = await this.checkExistById(id);
    const submissionUpdate = await this.#model.updateOne(
      { _id: submission._id },
      { $set: { isReviewed, feedback } }
    );
    return submissionUpdate;
  }

  async checkExistById(id) {
    if (!isValidObjectId(id))
      throw new createHttpError.BadRequest(SubmissionMessage.BadId);
    const submission = await this.#model.findById(id, { __v: 0 });
    if (!submission) throw new createHttpError.NotFound(SubmissionMessage.NotFound);
    return submission;
  }
}
module.exports = new SubmissionService();
