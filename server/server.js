const path =require("path");
const http=require("http");
const socketIO= require("socket.io");
const express= require ("express");
const app= express();
const server= http.createServer(app);
const io = socketIO(server)

const port=process.env.PORT || 3000;

const filePath= path.join(__dirname , "../client");


app.use(express.static(filePath));
console.log(filePath)

io.on("connection", (client)=>{
    console.log("client is connected")

client.on ("newMessage", (message)=>{
    console.log(`hello ${message.from}`)
 client.emit ("welcomeMessage", {
     from:"Admin",
     text:`hello ${message.from} I am the Admin`
 })   
})



client.on("disconnect", ()=>{
    console.log("client disconnected the server")
}) 
})



server.listen(port, ()=>{
    console.log(`Server connected on ${port}`)
})