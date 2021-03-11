const wsServer = require('./application/wsServer')
const httpServer = require('./application/httpServer')

wsServer.startServer();
httpServer.startServer();