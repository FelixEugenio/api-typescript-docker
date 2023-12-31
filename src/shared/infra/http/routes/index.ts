import { Router } from "express";
import { registerRoutes } from "./register.routes";
import { registerhourRoutes } from "./registerHour.routes";

const router = Router();

router.use('/users',registerRoutes);
router.use('/hour',registerhourRoutes);

export {router}