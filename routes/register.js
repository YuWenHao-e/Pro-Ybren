var express = require('express');
var router = express.Router();
var db = require("../mysql/db");

router.get('/',function(req,res){
    res.render('register');
}),

router.post('/',function(req,res){
    var user = req.body.username;
    var pass = req.body.password;
    db.query('select * from tab_users where user_name="'+user+'"',function(row){
        if(row.length == 0){
            db.query('insert into tab_users(user_name,pass_word) values("'+user+'","'+pass+'")',function (rows) {
                console.log(rows);
            });
            /*res.render('success');*/
            res.redirect('/home');
        }
        else{
            res.render('register',{err:'用户已被注册'});
        }
    });
});

module.exports = router;
