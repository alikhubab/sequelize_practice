import express from "express";
import http from "http";
import cors from "cors";

import { sequelize } from "../config/connection";
import Sequelize from "sequelize";
import { filePath } from "../helpers/helper";
import { UserRoutes } from "../routes/user-routes";
import * as bodyparser from "body-parser";

require("dotenv").config({ path: filePath("") + "/.env" });

export class App {
  app: express.Application;
  constructor(app: express.Application) {
    this.app = app;

    this.app.get("/", async (req: any, res: any) => {
      res.send("------- Sequelize Backend ----------");
    });
    const server: http.Server = http.createServer(this.app);
    this.startServer(server);
    this.setup();
    this.registerRoutes();
  }

  registerRoutes() {
    new UserRoutes(this.app);
  }

  setup() {
    this.app.use(bodyparser.json());
    this.app.use(cors());
  }

  startServer(server: http.Server) {
    const port = 3020;
    server.listen(port, () => {
      console.log("started server on port>>", port);
    });
  }
}
