import mongoose from "mongoose";


const assignmentSchema = mongoose.Schema({
    subject:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    deadline: {type:Date,required:true},

    faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty",
    required: true
  },
  description: String,
    course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }


},{timestamps:true})

export const Assignment = mongoose.model("Assignment", assignmentSchema);
