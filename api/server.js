const express = require("express");
const socketio = require("socket.io")
const helmet = require("helmet");
const cors = require("cors");
const http = require("http")

const router = require("./../routes/router")

const server = express();
const app = http.createServer(server)
const io = socketio(app)

server.use(helmet());
server.use(cors());
server.use(express.json());

io.on("connection", (socket) => {
    console.log("We have a connection")

    socket.on("disconnect", () => {
        console.log("User had disconnected")
    })
})

server.use(router)



// server.get("/", (req, res ) => {
//     res.status(200).json({api: "Greetings"})
// })





module.exports = server