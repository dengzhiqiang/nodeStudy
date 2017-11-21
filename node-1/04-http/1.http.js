var http = require('http');

// 创建一个服务

var server = http.createServer(function (req,res) {
    // 每当有请求的时候调用这个函数
    // req 请求信息
    // res 响应信息
    console.log('server has started!');

    // 请求方法 get post
    console.log(req.method);

    // 请求url
    console.log(req.url);

    // 请求头信息
    console.log(req.headers);

    /* 设置响应的信息 */
    // 设置状态码
    // res.statusCode = 200;
    
    // 设置响应头
    // 设置编码类型
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.setHeader('name','dengzhiqiang!');

    // 返回信息给页面
    var random = Math.random().toString();
    res.write(random);

    // 结束
    res.end();

});

// 监听端口 
// 在hosts 里面设置 127.0.0.1 www.nodestudy.com即可
// 这里的server和apache实现了类似的功能
server.listen(80,'www.nodestudy.com');


