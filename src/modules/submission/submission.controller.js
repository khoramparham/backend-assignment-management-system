const autoBind = require("auto-bind");
const httpCode = require("http-codes");
const Path = require("path");
const submissionService = require("./submission.service");
const SubmissionMessage = require("./submission.message");
const {
  submissionValidationSchema,
  submissionUpdateByTeacherValidationSchema,
  submissionUpdateByStudentValidationSchema,
} = require("./submission.validator");
class SubmissionController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = submissionService;
  }
  async add(req, res, next) {
    try {
      const { originalname, path } = req.file;
      const filePath = Path.join("http:/localhost:3000/", path).replace(/\\/g, "/");
      const file = {
        filename: originalname,
        url: filePath,
      };
      const submissionValidate = await submissionValidationSchema.validateAsync(req.body);
      const submission = await this.#service.add({ submissionValidate, file });
      return res.status(httpCode.CREATED).json({
        message: SubmissionMessage.AddSuccessfully,
        validationCode: submission._id,
      });
    } catch (error) {
      next(error);
    }
  }
  async get(req, res, next) {
    try {
      const id = req.params.id;
      const submission = await this.#service.getById(id);
      return res.status(httpCode.OK).json({
        message: SubmissionMessage.FindSuccessfully,
        submission,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      const assignmentId = req.params.assignmentId;
      const submission = await this.#service.getAll(assignmentId);
      return res.status(httpCode.OK).json({
        message: SubmissionMessage.FindSuccessfully,
        submission,
      });
    } catch (error) {
      next(error);
    }
  }
  async updateByStudent(req, res, next) {
    try {
      const { originalname, path } = req.file;
      const filePath = Path.join("http:/localhost:3000/", path).replace(/\\/g, "/");
      const file = {
        filename: originalname,
        url: filePath,
      };
      const submission = await submissionUpdateByStudentValidationSchema.validateAsync(
        req.body
      );
      await this.#service.updateByStudent({ submission, file });
      return res.status(httpCode.OK).json({
        message: SubmissionMessage.UpdateSuccessfully,
      });
    } catch (error) {
      next(error);
    }
  }
  async reviewSubmission(req, res, next) {
    try {
      const submission = await submissionUpdateByTeacherValidationSchema.validateAsync(
        req.body
      );
      await this.#service.reviewSubmission(submission);
      return res.status(httpCode.OK).json({
        message: SubmissionMessage.UpdateSuccessfully,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new SubmissionController();
