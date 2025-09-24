// src/config/db.js
import mongoose from "mongoose"; // use require("mongoose") if not using ES modules
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected 🚀");
  } catch (err) {
    console.error("Failed to connect to the database", err.message);
    process.exit(1);
  }
};

export default connectDB;
