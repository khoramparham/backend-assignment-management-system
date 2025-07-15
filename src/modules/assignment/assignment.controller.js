const autoBind = require("auto-bind");
const AssignmentService = require("./assignment.service");
const {
  createAssignmentSchema,
  updateAssignmentSchema,
} = require("./assignment.validator");
const AssignmentMessage = require("./assignment.message");
const httpCode = require("http-codes");
class AssignmentController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = AssignmentService;
  }
  async add(req, res, next) {
    try {
      const { title, description, dueDate, isActive } =
        await createAssignmentSchema.validateAsync(req.body);
      const userId = req.user._id;
      await this.#service.addAssignment({
        title,
        description,
        dueDate,
        isActive,
        userId,
      });
      res.status(httpCode.CREATED).json({
        message: AssignmentMessage.CreateSuccessfully,
      });
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const assignmentId = req.params.id;
      const userId = req.user._id;
      await this.#service.deleteAssignment(assignmentId, userId);
      res.status(httpCode.OK).json({
        message: AssignmentMessage.DeleteSuccessfully,
      });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const assignmentId = req.params.id;
      const userId = req.user._id;
      const { title, description, dueDate, isActive } =
        await updateAssignmentSchema.validateAsync(req.body);
      await this.#service.updateAssignment({
        title,
        description,
        dueDate,
        isActive,
        assignmentId,
        userId,
      });
      res.status(httpCode.OK).json({
        message: AssignmentMessage.UpdateSuccessfully,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      const userId = req.user._id;
      const assignments = await this.#service.getAllAssignment(userId);
      res.status(httpCode.OK).json({
        message: AssignmentMessage.FindSuccessfully,
        assignments,
      });
    } catch (error) {
      next(error);
    }
  }
  async getByID(req, res, next) {
    try {
      const assignmentId = req.params.id;
      const assignment = await this.#service.getAssignmentByID(assignmentId);
      res.status(httpCode.OK).json({
        message: AssignmentMessage.FindSuccessfully,
        assignment,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new AssignmentController();
