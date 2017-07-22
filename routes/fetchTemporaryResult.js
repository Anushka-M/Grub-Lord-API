var express = require('express');
var router = express.Router();
var db = require('../con_db');

router.get('/', function (req, res, next) {
    
    const keyword = req.query.keyword;
    console.log(keyword);
    var re = new RegExp('^' + keyword);
    console.log(re);
    db.recipe.find({recipeName:re}, {recipeName:true}, function(err, response) {
        if(response.length == 0) {
            console.log("Nothing found");
            return;
        }
        console.log("somthing found");
        console.log(response);
    });
});


module.exports = router;
