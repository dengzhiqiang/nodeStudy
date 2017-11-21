var http = require('http');
var fs = require('fs');
// 创建服务
var server = http.createServer(function (req, res) {
    console.log(req.method, req.url);

    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        });

        fs.readFile('./05.html', function (err, data) {
            console.log(data);
            res.write(data);
            res.end();
        });
    } else if (req.url == '/style.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css;charset=utf-8'
        });
        res.write('style.css');
        res.end();
    }




}).listen(80, 'www.nodestudy.com');