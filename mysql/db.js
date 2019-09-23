var mysql = require('mysql');
var db = {};
db.query =function (sql, callback) {
    var connect = mysql.createConnection({
        host:'localhost',
        user:'root',
        password: '979808cc',
        port:3306,
        database:'ybren'
    });
    connect.connect();
    connect.query(sql,function (err,row) {
        console.log(err);
        callback(row);
    });
    connect.end();
};
module.exports = db;