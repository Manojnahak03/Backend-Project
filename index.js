import dotenv from "dotenv";
dotenv.config();
import express from "express"
import connectDB from "./src/db/db.js"
const app = express()


connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Error :",error);
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB Connection Failed !!",err);
})
