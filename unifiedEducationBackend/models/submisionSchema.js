import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
    required: true
  },

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },

  fileURL: String,        // PDF / DOC / ZIP / Image
  textAnswer: String,     // For text-based submissions

  status: {
    type: String,
    enum: ["submitted", "checked", "graded"],
    default: "submitted"
  },

  marks: Number,
  feedback: String,

}, { timestamps: true });


export const Submission=mongoose.model("Submission",submissionSchema);
