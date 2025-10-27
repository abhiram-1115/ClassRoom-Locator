import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  block: { type: String, required: true },
  floor: { type: Number, required: true },
  capacity: { type: Number, required: true },
  resources: [{ type: String }]
});

export default mongoose.model("Classroom", classroomSchema);
