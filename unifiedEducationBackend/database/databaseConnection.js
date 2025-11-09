import mongoose from "mongoose"
import {databaseName} from "../src/constant.js"
const connect_database=async()=>{
try {
    await mongoose.connect(`${process.env.DATABASE_URL}/${databaseName}`);
    
} catch (error) {
    console.log("something went wrong in connection : ", error)
}    
}

export {connect_database}