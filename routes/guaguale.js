/**
 * Created by Auser on 2017/4/19.
 */
var express=require('express');
var router=express.Router();
var mysql=require('mysql');
var pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'111111',
    database:'tmcock'
});
router.get('/query',function(req,res,next){
    var ownerId=req.param('ownerId');
    pool.query('select * from guaguale_report_total where ownerId=?',ownerId,function(err,rows,fields){
        if(err) throw err;
        console.log("data is:",rows)
        res.send(rows);
    })
});
module.exports=router