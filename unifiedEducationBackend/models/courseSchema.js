import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  courseCode: {
    type: String,
    unique: true,
    required: true
  },

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true
  },
  teachers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty"
  }],
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  }],

}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);
export { Course };
