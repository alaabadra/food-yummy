require('dotenv').config();
const pg = require('pg');
const url = require('url');
const Pool = pg.Pool;

let DB_URL = process.env.DATABASE_URL;
if (process.env.NODE_ENV === 'test') {
    DB_URL = process.env.HEROKU_POSTGRESQL_YELLOW_URL;
}
const params = url.parse(DB_URL);

const pool = new Pool({
    user: params.auth.split(':')[0],
    password: params.auth.split(':')[1],
    host: params.hostname,
    port: params.port,
    database: params.path.split('/')[1],
    max: process.env.DB_MAX_CONNECTION || 2,
    ssl: params.hostname !== 'localhost'
})

module.exports = pool;