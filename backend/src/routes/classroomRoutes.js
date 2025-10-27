import express from 'express';
import Classroom from '../models/Classroom.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const classrooms = await Classroom.find();
    res.json(classrooms);
});

router.post("/", async (req, res) => {
  try {
    const classroom = new Classroom(req.body);
    await classroom.save();
    res.status(201).json({ message: "Classroom added successfully", classroom });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
