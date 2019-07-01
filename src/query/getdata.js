
const connect = require('./../database/db_connection.js')

const getData = (cb, type) => {
    connect.query(`SELECT * FROM menu where id_cat = ${type}`, (err, res) => {
        if (err) throw err;
        cb(null, res.rows)
    })
}
module.exports = getData;
