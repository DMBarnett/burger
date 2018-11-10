var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insertOne: function(burgName, cb){
        orm.insertOne(burgName, function(res){
            if(err) throw err;
            cb(res);
        })
    },
    updateOne: function(burgName, cb){
        orm.updateOne(burgName, function(res){
            if(err) throw err;
            cb(res);
        })
    },
    deleteOne: function(burgerId, cb){
        orm.deleteOne(burgerId, function(res){
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = burger;