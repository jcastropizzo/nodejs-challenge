const express = require("express")
const http = require("http")
const WebSocket = require("ws")
const db = require("../infrastructure/database.js")
const { isValidJSON } = require('./jsonHelper')

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

const startServer = () => {
    wss.on('connection', (ws) => {
        const sql = "insert into KeyValue(id,value) values(?,?)"
        ws.on('message', async (message) => {
            console.log('WS: received: %s', message);
            if (isValidJSON(message)) {
                let errors = []
                const messageObject = JSON.parse(message);
                for (let attributename in messageObject) {
                    const params = [attributename, JSON.stringify(messageObject[attributename])]
                    console.log(params)
                    try {
                        console.log('yay')
                        var res = await db.query(sql, params);
                        console.log(res);
                        console.log('yay2')
                    } catch (e) {
                        errors.push(e);
                    }
                    console.log(attributename + ": " + messageObject[attributename]);
                }
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