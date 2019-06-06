// Require the imported connection info from connection.js
const connection = require("./connection.js");

// constructing the ORM below
const orm = {
    selectAll: function(tableInput, callback) {
        // The first query is simply to select all data from the table and view all burgers.
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput],function(err, result) {
            if (err) throw err;
            callback(result);
      });
    },
    insertOne: function(tableInput, cols, vals, callback) {
        // This query adds a new burger to the table.
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
    
        connection.query(queryString, [tableInput, cols, vals], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(tableName, cols, vals, condition, callback) {
        // This query will update an existing burger.
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
        console.log(`UPDATE ${tableName} SET ${cols} = ${vals} WHERE id = ${condition};`)
  
        connection.query(queryString, [tableName, cols, vals, condition], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
  };
  
  // export the ORM to be used elsewhere
  module.exports = orm;