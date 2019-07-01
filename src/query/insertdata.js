const connect = require('../database/db_connection')

const insertIntoMenue = (name, price, cat_id, img_link, cb) => {
    connect.query(`INSERT INTO menu (name, price, id_cat, img_link) VALUES (
        '${name}', '${price}', '${cat_id}', '${img_link}')`, (err, result) => {
            if (err) cb(err);
        });
}

module.exports = insertIntoMenue;
