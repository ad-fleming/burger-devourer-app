const connection = require ("./connection.js");

const orm = {
    // Select all from the table
    selectAll: function(tableInput, cb){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err,result)=>{
            if (err) throw err;
            cb(result);
        })
    }, 
    // Insert into the table, this info right here
    insertOne: function(tableInput, col, val, cb){
        let queryString = `INSERT ${tableInput} (${col}) VALUES ('${val}')`;
        connection.query(queryString, (err, result)=>{
            if (err) throw err;
            cb(result);
        })

    },
    // Go to this table, 
    updateOne: function(tableInput, thingToUpdate, burgerId, cb){
        let queryString = `UPDATE ?? SET ?? = true WHERE id =?`;
        connection.query(queryString, [tableInput, thingToUpdate, burgerId], (err, result)=>{
            if(err) throw err;
            cb(result);
        })

    }
}

module.exports = orm;