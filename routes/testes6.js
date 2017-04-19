/**
 * Created by Auser on 2017/4/19.
 */
var express=require('express');
var router=express.Router();
/*
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
*/


router.get('/gen',function(req,res,next){
   /* var hw = helloWorldGenerator();
    console.log(hw.next())
    res.send("hello:",hw.next())*/
   console.log("wwwwwwwwwwwwwwwww3333")
    res.send("hello:")
});
module.exports=router