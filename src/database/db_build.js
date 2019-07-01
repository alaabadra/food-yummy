const connect = require('./db_connection');
const { readFileSync }= require('fs');
const { join }= require('path');

const sql_path= join(__dirname, 'db_build.sql');
const sql = readFileSync(sql_path).toString();

const build_db = (cb)=>{
    connect.query(sql, (err, result)=>{
        if(err) console.log(err)
        cb(null, result);
    });
}
build_db(() => console.log('Data base was built succesfully'));


module.exports = build_db;
