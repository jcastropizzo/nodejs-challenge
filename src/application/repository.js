const db = require("../infrastructure/database.js")

class Repository {
    static async getValueByKey (key) {
        const sql = "select value from KeyValue where [id] = ?"
        return await db.query(sql, [key]);
    }

    static async saveKeyValues (keyValues) {
        const sql = "insert into KeyValue(id,value) values(?,?)"
        let errors = []
        for (let attributename in keyValues) {
            const params = [attributename, JSON.stringify(keyValues[attributename])]
            try {
                var res = await db.query(sql, params);
                console.log(res);
            } catch (e) {
                errors.push({ key:attributename, error:e});
            }
        }
        return errors;
    }
}

module.exports = Repository;