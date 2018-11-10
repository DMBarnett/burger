var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    createOne: function(burgName, cb){
        orm.createOne(burgName, function(err, res){
            if(err) throw err;
            cb(res);
        })
    },
    updateOne: function(burgName, cb){
        console.log("Peach")
        orm.updateOne(burgName, function(err, res){
            console.log("pear")
            console.log(err, res);
            if(err) throw err;
            cb(res);
        })
    },
    deleteOne: function(burgerId, cb){
        orm.deleteOne(burgerId, function(err, res){
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = burger;