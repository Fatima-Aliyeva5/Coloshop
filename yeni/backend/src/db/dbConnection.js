import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connect to MongoDB")
}).catch(()=>{
    console.log("Error to MongoDB")
})