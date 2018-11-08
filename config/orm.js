var connection = require("./connection.js");

var orm = {
    selectAll: function(){
        connection.query("SELECT * FROM burgers", function(err, result){
            if(err) throw err;
            console.log(result)
        })
    },
    insertOne: function(burgerName){
        var foo;
        connection.query("SELECT * FROM burgers", function(err, result){
            if(err) throw err;
            foo = result;
        })
        foo.forEach(element => {
            if(element.burger_name.toLowerCase() === burgerName.toLowerCase()){
                console.log("Burger Already Exists");
                return;
            }
        });
        var qString = `INSERT INTO burgers VALUES ${burgerName}`;
        connection.query(qString, function(err, result){
            if(err) throw err;
            console.log(result)
        })
    },
    updateOne: function(burgerName){
        var qString = `UPDATE burgers SET devoured WHERE burger_name = ${burgerName}` 
        connection.query(qString, function(err, result){
            if(err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;
