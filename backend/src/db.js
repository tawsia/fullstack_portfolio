/**
 * MySQL database connection
 * We use this file to connect to MySQL once and reuse the connection.
 */
const mysql = require('mysql2/promise');
// require('dotenv').config();.
const pool = mysql.createPool(process.env.MYSQL_PUBLIC_URL);


module.exports = pool;
