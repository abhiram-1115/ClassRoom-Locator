import express from 'express';
import {verifyToken} from '../middleware/authMiddleware.js';
import Classroom from '../models/Classroom.js';

const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
    const classrooms = await Classroom.find();
    res.json(classrooms);
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const classroom = new Classroom(req.body);
    await classroom.save();
    res.status(201).json({ message: "Classroom added successfully", classroom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add classroom" });
  }
});
export default router;
