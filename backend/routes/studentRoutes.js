import express from 'express'
import { getAllStudents,newStudent,editStudent, deleteStudent } from '../controllers/studentController.js';

const router = express.Router();

router.get("/",getAllStudents)

router.post("/",newStudent)

router.put("/:id",editStudent)

router.delete("/:id",deleteStudent)

export default router;