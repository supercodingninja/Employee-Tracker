const util = require('util');
const mysql = require('mysql');
require("dotenv").config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: 'eTrack_db'
});

connection.connect((err)=>{
    
    if(err) throw err;
    
    console.log('This is my connection to MySQL, by id.' + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;