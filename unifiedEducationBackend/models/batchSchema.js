import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  batchName: {
    type: String,
    required: true
  },
  courses: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }
],
  year: {
    type: Number,
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }],
  classTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty"
  }
}, { timestamps: true });

const Batch = mongoose.model("Batch", batchSchema);
export { Batch };
