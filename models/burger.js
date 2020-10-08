const orm = require ("../config/orm.js");

/* CREATE CODE THAT WILL CALL THE ORM
FUNCTIONS USING BURGER-SPECIFIC INPUT */

// CODE GOES HERE
// ==========================

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      },}
// EX) orm.exampleMETHODNAME("BURGER INFO1", "BURGER INFO2", "BURGER INFO 3");


// ==========================



// TODO: EXPORT for burger controller

module.exports = burger;