const express = require("express")
const http = require("http")
const WebSocket = require("ws")
const Repository = require("../repository");
const db = require("../../infrastructure/database.js")
const { isValidJSON } = require('../jsonHelper')

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

const startServer = () => {
    wss.on('connection', (ws) => {
        ws.on('message', async (message) => {
            if (isValidJSON(message)) {
                const errors = await Repository.saveKeyValues(JSON.parse(message))
                await ws.send(JSON.stringify({
                    errors
                }))
            } else {
                await ws.send(`${message} is not a valid json`);
            }
        });
        ws.send('Connected');
    });

    server.listen(process.env.PORT || 8999, () => {
        console.log(`WS Server started on port ${server.address().port}`);
    });

}

module.exports = { startServer }