import { Router } from "express";
import { registerUserFactory } from "../../../../modules/Users/infra/repository/registerUserFactory";
const registerRoutes = Router();

const registerUserController = registerUserFactory();

registerRoutes.post('/',registerUserController.handle);

export {registerRoutes}