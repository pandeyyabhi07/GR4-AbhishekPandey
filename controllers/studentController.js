import Student from "../models/Student.js";
import Course from "../models/Course.js";


export const createStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const student = new Student({ name, email, age });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("courses");
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const student = await Student.findById(req.params.id);
    if (!student.courses.includes(courseId)) {
      student.courses.push(courseId);
      await student.save();
    }
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
