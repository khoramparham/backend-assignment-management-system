const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const swaggerConfig = require("./src/config/swagger.config");
const cors = require("cors");
const mainRouter = require("./src/app.router");
const AllExceptionHandler = require("./src/common/exception/all-excption.handler");
const NotFoundHandler = require("./src/common/exception/not-found.handler");
const cookieParser = require("cookie-parser");
const path = require("path");
async function main() {
  const app = express();
  const port = process.env.PORT;
  require("./src/config/mongoose.config");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

  app.use("/public", express.static("public"));
  swaggerConfig(app);
  app.use(mainRouter);
  AllExceptionHandler(app);
  NotFoundHandler(app);
  app.listen(port, () => {
    console.log(`app run successfully on port ${port}`);
  });
}
main();
