const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

// Router imports go here

const server = express();

server.use(morgan("short"));
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.send(`<h2>Server is working now get coding and do your magic!!!</h2>`)
});

server.use((req, res) => {
    res.status(404).json({
        message: "Route was not found."
    });
});

module.exports = server;