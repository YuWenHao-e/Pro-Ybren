var express =require('express');
var router =express.Router();
var db =require('../mysql/db');

router.get('/',function(req,res){
    res.render('login');
});
router.post('/', function(req, res, next) {
    var user=req.body.user;
    var pass=req.body.pass;
    db.query('select * from tab_users where user_name="'+user+'"and pass_word="'+pass+'"' ,function (row){
        console.log(row);
        if (row.length==1){
            res.redirect('/home');
            // res.render('index', { title: 'Express' });
        }else {
            db.query('select * from tab_users where user_name="'+user+'" ',function (row){
                if (row.length==0){
                    res.render('login', {err: '没有此用户' });
                }
            })
            db.query('select * from tab_users where user_name="'+pass+'" ',function (row){
                if (row.length==0){
                    res.render('login', {err: '密码错误' });
                }
            })

            // res.redirect('/register',{err: '用户名被使用' });
        }
    });
});
module.exports =router;