import { Router } from "express";
import { registerRoutes } from "./register.routes";
import { registerhourRoutes } from "./registerHour.routes";
import { registerCategoryRoutes } from "./registerCategory.routes";

const router = Router();

router.use('/users',registerRoutes);
router.use('/hour',registerhourRoutes);
router.use('/category',registerCategoryRoutes);

export {router}