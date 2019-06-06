var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], // The above line passes in the table column names 
  [
    req.body.burger_name, req.body.devoured
  ], // the above line passes the needed values into the columns defined above that.
  function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', function(req, res) {
  burger.updateOne([
      "devoured"
    ], // The above line passes in the table column names 
    [
      req.body.devoured
    ], // the above line passes in the devoured param
    req.params.id,
    // the above line gets the ID for SQL
    function(result) {
      console.log(result);
      res.render("index");
  });
});

// Export routes for server.js to use.
module.exports = router;
