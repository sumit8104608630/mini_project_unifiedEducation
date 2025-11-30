import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  phone: {
    type: Number,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  courses: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }
],
  password: {
    type: String,
    required: true
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ],
profilePic:{
  type:String
}
}, { timestamps: true });

export const Faculty = mongoose.model("Faculty", facultySchema);
