import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  building: { type: String, required: true },
  capacity: Number,
  facilities: [String]
});

export default mongoose.model("Classroom", classroomSchema);
