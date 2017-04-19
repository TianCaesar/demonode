/**
 * Created by Auser on 2017/4/19.
 */
var http=require('http');
var url=require('url')
http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    var parsedUrl=url.parse(request.url,true);
    if(parsedUrl.query.path=='err'){
        throw new Error("Eeroor");
    }
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(9000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');