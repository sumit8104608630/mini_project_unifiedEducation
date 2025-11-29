import mongoose  from "mongoose";

const attendanceSchema=mongoose.Schema({
    course:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    faculty:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    Student:[
        {
            student:{
            type:mongoose.Schema.Types.ObjectId,
            },
            status:{
                type:String,
                enum:["present","absent"]
            }
        }

    ],

},{timestamps:true})