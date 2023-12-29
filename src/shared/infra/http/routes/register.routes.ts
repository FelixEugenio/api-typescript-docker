import { Router } from "express";
import { registerUserFactory } from "../../../../modules/Users/useCases/registerUser/registerUserFactory";
const registerRoutes = Router();

const registerUserController = registerUserFactory();

registerRoutes.post('/',registerUserController.handle);

export {registerRoutes}