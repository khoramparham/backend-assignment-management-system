const { Router } = require("express");
const AssignmentController = require("./assignment.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();
router.post("/add", Authorization, AssignmentController.add);
router.delete("/:id", Authorization, AssignmentController.delete);
router.get("/all", Authorization, AssignmentController.getAll);
router.get("/:id", AssignmentController.getByID);
router.patch("/:id", Authorization, AssignmentController.update);

module.exports = { AssignmentRouter: router };
