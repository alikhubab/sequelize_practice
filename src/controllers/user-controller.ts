import express from "express";
import Joi, { ValidationError } from "joi";
import crypto from "crypto";

import { User } from "../models/user";
import { sequelize } from "../config/connection";
import bcrypt from "bcryptjs";
import { UserRole } from "../constants/enums";

export class UserController {
  private static instance: UserController | null = null;

  private constructor() {}
  static init(): UserController {
    if (this.instance === null) {
      this.instance = new UserController();
    }
    return this.instance;
  }

  public createUser = async (req: express.Request, res: express.Response) => {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    console.log("req", req.body);

    const { error, value } = schema.validate(req.body);

    if (error instanceof ValidationError)
      return res.status(200).send(error?.details[0].message);

    const user: User | null = await User.findOne({
      where: { email: req.body.email },
    });

    if (user) return res.status(400).send("User already exists");

    let passwordDg = crypto.randomBytes(8).toString("hex");

    const userData: any = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(passwordDg, 5),
    };
    const transaction = await sequelize.transaction();
    try {
      const user = await User.create(userData, {
        transaction,
      });

      await transaction.commit();
      return res
        .status(200)
        .send(
          `User Addedd Successfully>> ${{ name: user.name, email: user.email }}`
        );
    } catch (e: any) {
      await transaction.rollback();
      console.log(
        "transaction rolled back because of the following error>>",
        e
      );
    }
  };

  public makeAdmin = async (req: express.Request, res: express.Response) => {
    const schema = Joi.object().keys({
      id: Joi.number().required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error instanceof ValidationError)
      return res.status(200).send(error?.details[0].message);

    const user: User | null = await User.findOne({
      where: { id: req.body.id },
    });
    console.log("user>>>>>>>>>>>", user);

    if (!user) return res.status(404).send("User not found");
    user.set({
      role: UserRole.ADMIN,
    });
    await user.save();
    res.status(200).send(`User ${user.name} has been made an Admin`);
  };

  public getUsers = async (req: express.Request, res: express.Response) => {
    const users = await User.findAll();
    console.log("users???????????????", users);
    res.status(200).send(users);
  };

  public deleteUser = async (req: express.Request, res: express.Response) => {
    const schema = Joi.object().keys({
      id: Joi.number().required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error instanceof ValidationError)
      return res.status(200).send(error?.details[0].message);

    const user = await User.findByPk(req.body.id);
    console.log("deleting user>>", user);
    await user?.destroy();
    res.status(200).send("Deleted User Successfully");
  };
}
