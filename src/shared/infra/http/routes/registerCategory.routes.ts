import { Router } from "express";
import { RegisterCategoryController } from "../../../../modules/Category/useCases/registerCategory/registerCategoryController";
const registerCategoryRoutes = Router();

const registerCategoryController = new RegisterCategoryController();

registerCategoryRoutes.post('/', registerCategoryController.handle);

export {registerCategoryRoutes}