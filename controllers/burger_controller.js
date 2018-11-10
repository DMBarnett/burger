var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject ={
            burger: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res){
    burger.createOne(
        [req.body.name],
        function(result){
            res.json({id: result.id})
        })
})

router.put("/api/burger/:id", function(req, res){

    var bar = 0;

    if(req.body.devour === "1"){
        bar = 0;
    }else{
        bar = 1;
    }
    burger.updateOne({
        devoured: bar,
        id: req.body.id
    }, function(result){
        if(result.changedRows === 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})

router.delete("/api/burgers/:id", function(req, res){

    burger.deleteOne(req.params.id, function(result){
        if(result.affectedRows === 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})

module.exports = router;
