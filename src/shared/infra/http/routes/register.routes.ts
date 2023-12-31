import { Router } from "express";
import { celebrate } from "celebrate";
import { registerValidatorv } from "../../../../modules/Users/useCases/registerUser/validator";
import { RegisterUserController } from "../../../../modules/Users/useCases/registerUser/registerUserController";
import { RegisterHourController } from "../../../../modules/Hour/useCases/registerHour/registerHourController";
const registerRoutes = Router();

const registerUserController = new RegisterUserController();
const registerHourController = new RegisterHourController();

registerRoutes.post('/',celebrate(registerValidatorv), registerUserController.handle);
registerRoutes.post('/', registerHourController.handle);

export {registerRoutes}