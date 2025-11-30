import mongoose from "mongoose";

// let's create the schema for the student 

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },

    profilePic:{
      type:String,

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
      batch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Batch"
  },

department: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Department"
}
,
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
  courses: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }
]
,
  assignmentSubmission:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Submission"
  }]
},{timestamps:true})

const Student=mongoose.model("Student",studentSchema);

export {Student};