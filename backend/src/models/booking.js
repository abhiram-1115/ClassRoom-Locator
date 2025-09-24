import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  classroomId: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
  startTime: Date,
  endTime: Date,
  status: { type: String, enum: ["confirmed", "cancelled"], default: "confirmed" }
});

export default mongoose.model("Booking", bookingSchema);
