const express = require("express");
const dotenv = require("dotenv");
async function main() {
  const app = express();
  const port = process.env.PORT;
  require("./src/config/mongoose.config");
  app.listen(port, () => {
    console.log("app run successfully");
  });
}
main();
