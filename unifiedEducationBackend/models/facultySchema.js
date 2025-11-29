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
  course: [
    {
      type: String
    }
  ],
  password: {
    type: String,
    required: true
  },

  // Correct many-to-many relation with students
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ]

}, { timestamps: true });

export const Faculty = mongoose.model("Faculty", facultySchema);
