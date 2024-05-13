const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config({});

const connectDB=async(req,res)=>{
    try{
        const db_connnect=  await mongoose.connect(process.env.db_string);
        console.log("Connected to mongoDB Brother");
     
     }
     
    catch(error){
         console.log("error while connecting to the mongoDB"  , error)
     
    }
}

connectDB();

module.exports=connectDB;