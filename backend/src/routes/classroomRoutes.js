import express from 'express';
import Classroom from '../models/Classroom.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const classrooms = await Classroom.find();
    res.json(classrooms);
});

router.post('/', async (req,res)=>{
    const newClassroom = new Classroom(req.body);
    await newClassroom.save();
    res.status(201).json(newClassroom); 
});

export default router;
