var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM burgers", function(err, result){
            if(err) throw err;
            cb(result);
        })
    },
    createOne: function(burgerName, cb){
        console.log(burgerName);
        var qString = "INSERT INTO burgers(burger_name) VALUES('"+burgerName+"')";

        connection.query(qString, [burgerName], function(err, result){
            if(err) throw err;

            cb(err, result);
        })
    },
    updateOne: function(burgerName, cb){

        var qString = "UPDATE burgers SET devoured="+burgerName.devoured+" WHERE id = "+ burgerName.id; 
        connection.query(qString, function(err, result){
            if(err) throw err;

            cb(err, result);
        })
    },
    deleteOne: function(id, cb){
        var qString = "DELETE FROM burgers WHERE id = '"+id+"'";
        connection.query(qString, function(err, result){
            if(err) throw err;
            console.log(result);
            cb(err, result);
        })
    }
}

module.exports = orm;
