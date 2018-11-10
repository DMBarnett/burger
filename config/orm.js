var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM burgers", function(err, result){
            if(err) throw err;
            
            console.log(result);
            cb(result);
        })
    },
    createOne: function(burgerName, cb){
        // var foo;
        // connection.query("SELECT * FROM burgers", function(err, result){
        //     if(err) throw err;
        //     foo = result;
        // })
        // foo.forEach(element => {
        //     if(element.burger_name.toLowerCase() === burgerName.toLowerCase()){
        //         console.log("Burger Already Exists");
        //         return;
        //     }
        // });
        var qString = "INSERT INTO burgers VALUES(?)";
        connection.query(qString, [burgerName], function(err, result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    },
    updateOne: function(burgerName, cb){
        var qString = "UPDATE burgers SET devoured=1 WHERE burger_name = ?" 
        console.log(qString);
        console.log("here")
        connection.query(qString, [burgerName], function(err, result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    },
    deleteOne: function(id, cb){
        var qString = "DELETE FROM burgers WHERE id = ?";
        connections.query(qString, [id], function(err, result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    }
}

module.exports = orm;
