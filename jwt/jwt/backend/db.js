const mongoose= require('mongoose')

const connectDb=async()=>{
    
    try{
        const connect= await mongoose.connect("mongodb+srv://ajayshakya:ajayajay@cluster0.3rgz1au.mongodb.net/JWTuser?retryWrites=true&w=majority&appName=Cluster0")
        console.log("you are connected to the mongoDB")
    }
    catch(error){
        console.log(" connectDb Error  ", error)
    }

}
connectDb();
module.exports=connectDb