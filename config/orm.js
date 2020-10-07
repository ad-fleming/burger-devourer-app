const connection = require ("./connection.js")


const orm = {
    // Select all from the table
    selectAll: function(tableInput){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err,result)=>{
            if (err) throw err;
            console.log(result);
        })
    }, 
    // Insert into the table, this info right here
    insertOne: function(tableInput, burgerName){
        let queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(queryString, [tableInput, burgerName], (err, data)=>{
            if (err) throw err;
            console.log (result);
        })

    },
    // Go to this table, 
    updateOne: function(tableInput, thingToUpdate, burgerName){
        let queryString = `UPDATE ?? SET ?? = true WHERE burger_name =?`;
        connection.query(queryString, [queryString, tableInput, thingToUpdate, burgerName], (err, data)=>{
            if(err) throw err;
            console.log(result);
        })

    }
}

module.exports = orm;