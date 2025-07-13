const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const swaggerConfig = require("./src/config/swagger.config");
const mainRouter = require("./src/app.router");
const AllExceptionHandler = require("./src/common/exception/all-excption.handler");
const NotFoundHandler = require("./src/common/exception/not-found.handler");
async function main() {
  const app = express();
  const port = process.env.PORT;
  require("./src/config/mongoose.config");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  swaggerConfig(app);
  app.use(mainRouter);
  AllExceptionHandler(app);
  NotFoundHandler(app);
  app.listen(port, () => {
    console.log(`app run successfully on port ${port}`);
  });
}
main();
