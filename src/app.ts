import { App } from "./bootstrap/app.bootstrap";
import express from "express";

export const app = new App(express());
