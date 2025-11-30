import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  },

  image: {
    type: String  // optional image or banner
  },

  document: {
    type: String  // optional pdf/doc link
  },

  createdByFaculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty",
    default: null
  },

  createdByDepartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    default: null
  },

  tags: [
    {
      type: String
    }
  ],

  audience: {
    type: String,
    enum: ["all", "department", "course", "batch", "students", "faculty"],
    default: "all"
  },

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    default: null
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    default: null
  },

  batch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Batch",
    default: null
  },

  priority: {
    type: String,
    enum: ["normal", "important", "urgent"],
    default: "normal"
  }

}, { timestamps: true });

export const News = mongoose.model("News", newsSchema);

