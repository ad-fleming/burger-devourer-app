const express = require ("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions
const burger = require("../models/burger.js")

// ROUTES GO HERE

// Get (READ/VIEW ROUTE)
// router.get("/")

// POST (CREATE ROUTE)
// router.post("/api/burgers")

// PUT (UPDATE ROUTE)
// router.put("/api/burgers/:id")

// DELETE (DELETE ROUTE)
// router.delete(/api/burgers/:id")



//Export for use in server.js
module.exports = router;