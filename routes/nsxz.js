var express = require('express');
var router = express.Router();
var db = require("../mysql/db");

var index = 0;
const con = 8;

router.get('/',function(req,res){
    db.query('select * from products where type="1" limit 0,8',function (row) {
        res.render('nsxz',{pageindex:index,row:row});
    })
}),

router.post('/',function (req,res) {
    var nextindex = req.body.next_index;
    db.query('select * from products where type="1" limit '+nextindex+','+con+'',function (row) {
        res.json(row);
    })
}),
module.exports = router;
