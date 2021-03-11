var express = require("express")
const Repository = require("../repository");
var md5 = require("md5")

// Server port
var HTTP_PORT = 8000
// Start server
const startServer = async () => {
    var app = express()
    app.listen(HTTP_PORT, () => {
        console.log(`REST Server started on port ${HTTP_PORT}`)
    });

    app.get("/api/key-values/:key", async (req, res, next) => {
        try {
            const result = await Repository.getValueByKey(req.params.key)
            res.json({
                "message": "success",
                "data": JSON.parse(result[0].value)
            });
        } catch (e) {
            res.status(400).json({ error: e });
        }
    });

    app.use(function (req, res) {
        res.status(404);
    });
}
module.exports = { startServer }