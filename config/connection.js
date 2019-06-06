// create a variable requiring mysql module.
const mysql = require("mysql");

// Provide mySQL module with correct connection settings.
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "docker",
    database: "burgers_db"
  });
}

// Make the connection to the sequel server and provide error logging if necessary.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// exporting the connection for use in the application.
module.exports = connection;