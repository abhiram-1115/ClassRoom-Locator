import express from 'express';
import user from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { signup, login } from '../controllers/authController.js';
const router=express.Router();


// signup and login routes
router.post('/signup', signup);
router.post('/login', login);






export default router;