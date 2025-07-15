const autoBind = require("auto-bind");
const AssignmentModel = require("./assignment.model");
const createHttpError = require("http-errors");
const AssignmentMessage = require("./assignment.message");
const { isValidObjectId } = require("mongoose");

class AssignmentService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = AssignmentModel;
  }
  async addAssignment({ title, description, dueDate, isActive, userId }) {
    const assignment = await this.#model.create({
      title,
      description,
      dueDate,
      isActive,
      createdBy: userId,
    });
    return assignment;
  }
  async deleteAssignment(id, userId) {
    if (isValidObjectId(id) && isValidObjectId(userId)) {
      await this.checkExistAssignmentByID(id, userId);
      await this.#model.deleteOne({ _id: id });
    }
  }
  async updateAssignment({
    title,
    description,
    dueDate,
    isActive,
    userId,
    assignmentId,
  }) {
    if (isValidObjectId(assignmentId) && isValidObjectId(userId)) {
      var assignment = await this.checkExistAssignmentByID(assignmentId, userId);
    }
    console.log(dueDate || assignment.dueDate);

    await this.#model.updateOne(
      { _id: assignmentId, createdBy: userId },
      {
        title: title || assignment.title,
        description: description || assignment.description,
        dueDate: dueDate || assignment.dueDate,
        isActive: isActive || assignment.isActive,
      }
    );
  }
  async getAllAssignment(userId) {
    const assignments = await this.#model.find(
      { createdBy: userId },
      {
        __v: 0,
        submissions: 0,
      },
      { sort: { _id: -1 } }
    );
    return assignments;
  }
  async getAssignmentByID(id) {
    const assignment = await this.#model.findOne(
      { _id: id, isActive: true },
      { __v: 0, submissions: 0 }
    );
    if (!assignment) throw new createHttpError.NotFound(AssignmentMessage.NotFound);
    return assignment;
  }
  async checkExistAssignmentByID(id, userId) {
    const assignment = await this.#model.findOne(
      { _id: id, createdBy: userId },
      { __v: 0, submissions: 0 }
    );
    if (!assignment) throw new createHttpError.NotFound(AssignmentMessage.NotFound);
    return assignment;
  }
}
module.exports = new AssignmentService();
