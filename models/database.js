const mysql = require("mysql2");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});
module.exports = connection;
