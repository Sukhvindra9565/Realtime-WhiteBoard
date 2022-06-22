const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const server = require('http').createServer(app);
const {Server} = require("socket.io");

const io = new Server(server);

// Routes
app.get("/",(req,res)=>{
    res.send("This is mern realtime sharing app official server by sukhvindra singh");
})

io.on("Connection",(Socket)=>{
    Socket.on("userJoined",(data)=>{
        const {name,userId,roomId,host,presenter} = data;
        Socket.join(roomId);
        Socket.emit("userIsJoined",{success:true});
    })
})
server.listen(port,()=>console.log("Server is running on http://localhost:5000"));