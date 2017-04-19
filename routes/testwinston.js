/**
 * Created by Auser on 2017/4/19.
 */
var winston=require('winston');
var express=require('express');
var router=express.Router();
winston.add(winston.transports.File, { filename: '../logs/somefile.log' });

winston.configure({
    transports:[
        new (winston.transports.File)({ filename: 'somefile.log' })
    ]
})

var logger=new (winston.Logger)({
    transports:[
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename:'../logs/logger.log'})
    ]
})
router.get("/file",function(req,res,next){
   winston.log('info','Hello distributed log files');
   logger.info('my logger');
    res.send("logger");
});

module.exports=router;