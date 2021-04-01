const util = require('util'); // See Reference Below (middleware) //
const mysql = require('mysql');
require("dotenv").config();

// Connecting to eTrack_db //
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


// Ref. https://stackoverflow.com/questions/54730641/node-js-how-to-apply-util-promisify-to-mysql-pool-in-its-simplest-way //
connection.query = util.promisify(connection.query);

module.exports = connection;