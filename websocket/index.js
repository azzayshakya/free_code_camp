const express= require("express");
const port=9000;

const http= require("http")
const { Server } = require('socket.io');
const path=require("path")

const app= express();
const server= http.createServer(app)
app.use(express.static(path.resolve("./public")))
const io = new Server(server);


io.on('connection', (socket) => {
    socket.on("user-message",(message)=>{
        // console.log("a new user message",message)
        io.emit("message",message)
    });
    console.log('a  new user connected',socket.id);
  });

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       io.emit('chat message', msg);
//     });
//   });
// const cors=require("cors")

// app.use(cors({
//     origin:"*",
//     credentials:true
// }))
// app.use(express.static("/public"));



app.get('/',(req,res)=>{
    res.sendFile("/public/index.html")
})

server.listen(port,()=>{
    console.log("your app is running")
})