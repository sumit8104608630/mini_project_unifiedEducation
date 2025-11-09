import dotenv from "dotenv"
import {connect_database} from "../database/databaseConnection.js"
import {app} from "./app.js"

dotenv.config("./.env");

// let's connect the database 

connect_database().then(()=>{
    console.log("database connected successfully happy DB ")
}).catch((err)=>{
    console.log("something went wrong in connection ",err)
})


// let's make app to listen at some port
app.listen(process.env.PORT,()=>{
    console.log("server is running at the port : "+process.env.PORT);
})

 

 