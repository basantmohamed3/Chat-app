var socket= io("http://localhost:3000")
socket.on("connect", ()=>{
    console.log("connected to server")

socket.emit("newMessage", {
    from: "Basant",
    text: "hello there from client side"
 
})

socket.on("welcomeMessage", (data)=>{
    console.log(data)
})
})