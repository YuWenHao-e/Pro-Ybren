var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('nscs');
}),

    module.exports = router;