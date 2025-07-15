const { Router } = require("express");
const { AuthRouter } = require("./modules/auth/auth.routes");
const { AssignmentRouter } = require("./modules/assignment/assignment.routes");
const mainRouter = Router();
mainRouter.use("/auth", AuthRouter);
mainRouter.use("/assignment", AssignmentRouter);
module.exports = mainRouter;
