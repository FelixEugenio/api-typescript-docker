import { Router } from "express";
import { RegisterUserController } from "../../../../modules/Users/useCases/registerUser/registerUserController";
const registerRoutes = Router();

const registerUserController = new RegisterUserController();

registerRoutes.post('/',registerUserController.handle);

export {registerRoutes}