import express, { Application, Router } from "express";
import { RoutesConfig } from "./routes.config";
import { UserController } from "../controllers/user-controller";

export class UserRoutes extends RoutesConfig {
  route: Router | null = null;

  constructor(app: express.Application) {
    super(app, "userRoutes");
  }

  configureRoutes() {
    this.route = express.Router();

    this.configureUserRoutes();
    this.app.use("/user", this.route);
    return this.app;
  }

  configureUserRoutes() {
    // const route = express.Router();
    const controller = UserController.init();

    this.route?.post("/create", controller.createUser);
    this.route?.put("/make-admin", controller.makeAdmin);
    this.route?.get("/users", controller.getUsers);
    this.route?.delete("/delete", controller.deleteUser);
  }
}
