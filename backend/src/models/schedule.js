import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  classroomId: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
  course: String,
  faculty: String,
  day: String,
  startTime: String,
  endTime: String
});

export default mongoose.model("Schedule", scheduleSchema);
