import mongoose from "mongoose";

// let's create the schema for the student 

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true,
        enum:["Male","Female","Other"]
    },
    dob:{
        type:Date,
        required:true
    },
      achievements: [
    {
      title: String,
      year: Number,
      description: String,
    },
  ],
      projects: [
    {
      title: String,
      description: String,
      grade: String,
      projectLink:String,
      mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Faculty",
      },
    },
  ],
    email:{
        type:String,
        required:true,
        unique:true,
    },
  password: {
    type: String,
    required: true,
  },
    role: {
    type: String,
    default: "student",
  },
  assignmentSubmission:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Submission"
  }]
},{timestamps:true})

const Student=mongoose.model("Student",studentSchema);

export {Student};