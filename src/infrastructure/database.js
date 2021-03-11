var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE KeyValue (
            id text PRIMARY KEY,
            value text,
            CONSTRAINT id_unique UNIQUE (id)
            )`,
            (err) => {
                if (err) {
                } else {
                    console.log('database initialized.')
                }
            });
    }
});

db.query = function (sql, params) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(params)) throw new Error("params is not an array!");
        this.all(sql, params, function (err, rows) {
            if (err)
                reject(err)
            else
                resolve(rows)
        })
    });
};


module.exports = db