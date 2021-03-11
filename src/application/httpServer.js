var express = require("express")
var db = require("../infrastructure/database.js")
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
            const sql = "select value from KeyValue where [id] = ?"
            const params = [req.params.key]
            const result = await db.query(sql, params)
            console.log(result);
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