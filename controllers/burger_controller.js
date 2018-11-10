var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject ={
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res){
    burger.createOne(
        ["burger_name"], 
        [res.body.newBurger],
        function(result){
            res.json({id: result.id})
        })
})

router.put("/api/burger/:id", function(req, res){
    var foo = "id= " + req.params.id;
    burger.updateOne({
        
    })
})
module.exports = router;
