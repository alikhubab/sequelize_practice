import express from "express";

import { UserController } from "../controllers/user-controller";

export abstract class RoutesConfig {
  app: express.Application;
  name: string;

  userController: UserController = UserController.init();

  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
    this.configureRoutes();
  }
  getName() {
    return this.name;
  }

  abstract configureRoutes(): express.Application;
}
