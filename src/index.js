const wsServer = require('./application/servers/wsServer')
const httpServer = require('./application/servers/httpServer')

wsServer.startServer();
httpServer.startServer();