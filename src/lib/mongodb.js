import mongoose from "mongoose";

const dbConnection=async ()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://rakeshspm2323:rakeshspm2323@blog.w2jcxmt.mongodb.net/?retryWrites=true&w=majority&appName=blog");
        if(conn){
            console.log("mongodb connected")
        }
        return conn
    }
    catch(error){
        console.log("mongodb connection error :  ",error)
    }

}

export default dbConnection