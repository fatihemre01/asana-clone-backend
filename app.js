const express = require("express");
const { ProjectRoutes, UserRoutes } = require("./api-routes");
const config = require("./config");
const loaders = require("./loaders");

const app = express();
app.use(express.json());

config();
loaders();

app.listen(process.env.APP_PORT, () => {
  console.log("Listenin on port 3000");
  app.use("/projects", ProjectRoutes);
  app.use("/users", UserRoutes);
});
