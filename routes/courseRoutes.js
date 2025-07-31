import express from "express";
import { createCourse } from "../controllers/courseController.js";

const router = express.Router();

router.post("/", createCourse);

export default router;
