const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
function swaggerConfig(app) {
  const openapiSpecification = swaggerJsdoc({
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "assignment management system",
        description: "",
        version: "1.0.0",
      },
    },
    apis: [process.cwd() + "/src/modules/**/*.swagger.js"],
  });
  const swagger = swaggerUi.setup(openapiSpecification, {});
  app.use("/swagger", swaggerUi.serve, swagger);
}
module.exports = swaggerConfig;
