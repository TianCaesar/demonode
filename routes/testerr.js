/**
 * Created by Auser on 2017/4/19.
 */
var express=require('express')
var router=express.Router();

router.get('/err',function (req,res,next) {
    var i=1/0;
    res.send('show have a err');
});
router.get('/throw',function (req,res,next) {
    throw new Error("Error");
    res.send('show have a err');
});
module.exports=router