import express, { Router } from "express";
import { get_home } from "../controllers/home_controller";

const router: Router = express.Router();

router.route("/").get(get_home);

export default router;
