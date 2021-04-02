const util = require('util'); // See Reference Below (middleware) //
const mysql = require('mysql');
require("dotenv").config();

// Connecting to eTrack_db //
const connect = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: process.env.DB_USERNAME, // Verified. //
    password: process.env.DB_PASS, //Verified. //
    database: 'eTrack_db'
});

connect.connect((err)=>{
    
    if(err) throw err;
    
    console.log('This is my connection to MySQL, by id.' + connect.threadId);
});


// Ref. https://stackoverflow.com/questions/54730641/node-js-how-to-apply-util-promisify-to-mysql-pool-in-its-simplest-way //
connect.query = util.promisify(connect.query);

module.exports = connect;