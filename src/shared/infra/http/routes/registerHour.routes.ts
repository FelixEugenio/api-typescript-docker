import { Router } from "express";
import { RegisterHourController } from "../../../../modules/Hour/useCases/registerHour/registerHourController";
const registerhourRoutes = Router();

const registerHourController = new RegisterHourController();

registerhourRoutes.post('/', registerHourController.handle);

export {registerhourRoutes}