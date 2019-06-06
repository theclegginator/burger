// Import orm.js into the file.
const orm = require("../config/orm.js");


const burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, callback) {
    // vals here will be the burger name and devoured value.
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  updateOne: function(cols, vals, condition, callback) {
    // in this case, vals will simply be the devoured value.
    // the condition will be the burger id for SQL
    orm.updateOne("burgers", cols, vals, condition, function(res) {
      callback(res);
    });
  },
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;