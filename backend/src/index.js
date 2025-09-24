import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import mongoose from 'mongoose';

//import authRoutes from './routes/authRoutes.js';
//import  schuedulesRoutes from './routes/schedulesRoutes.js';
import classroomRoutes from './routes/classroomRoutes.js';
//import bookingRoutes from "./routes/bookingRoutes.js";


const app = express();
dotenv.config();
await mongoose.connect(process.env.MONGO_URI);


app.use(cors());
app.use(express.json());

//app.use('/api/auth', authRoutes);
//app.use('/api/schedules', schuedulesRoutes);
app.use('/api/classrooms', classroomRoutes);
//app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database', error);
});