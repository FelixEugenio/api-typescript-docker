import { Router } from "express";
import { registerUserFactory } from "../repository/registerUserFactory";

const registerRoutes = Router();

const registerUserController = registerUserFactory();

registerRoutes.post('/',registerUserController.handle);

export {registerRoutes}