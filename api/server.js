const express = require("express");
const socketio = require("socket.io")
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());



server.get("/", (req, res ) => {
    res.status(200).json({api: "Greetings"})
})





module.exports = server