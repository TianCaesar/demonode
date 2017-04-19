var express = require('express');
var router = express.Router();
var mysql=require('mysql');
/* GET home page. */
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
router.get('/', function(req, res, next) {
  var connection=mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'111111',
      database:'test1'
  });
    var hw = helloWorldGenerator();
    console.log("ww23232322");
    console.log(hw.next());
    connection.connect();
    //查询
    connection.query('SELECT * from user', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows);
    });
    res.render('index', { title: 'Express' });
});

var pool=mysql.createPool({
    connectionLimit :10,
    host:'localhost',
    user:'root',
    password:'111111',
    database:'test1'
});
router.get('/pool',function(req,res,next){
    pool.query('select * from user',function(err,rows,fields){
        if(err) throw err;
        console.log('The solution is:',rows);
        console.log('The fields is:',fields);
    });
    res.render('index',{title:'Express'})
});

module.exports = router;
