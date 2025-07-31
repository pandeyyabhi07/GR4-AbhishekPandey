import express from "express";
import {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  enrollCourse,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getAllStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.patch("/:id/enroll", enrollCourse);

export default router;
