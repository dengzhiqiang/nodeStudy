// 如果是require('x')这样开头不是相对or绝对地址符号，
// 也没说是.js或者.json的，就当做模块来找。
// 先找是不是core module，然后一级一级向上看node_modules文件夹，
// 每一级的node_modules先看里面是否有basename为所找的文件，
// 再看是否有模块名文件夹下package.json的main标明的文件，
// 然后不死心地看看模块名文件夹下有没有index.js和index.node。
// 最后找不到的话，还要搜一遍全局环境，比如$HOME /.node_modules / 什么的

// https://www.npmjs.com/package/mime  mime的地址

var http = require('http');
var fs = require('fs');
var mime = require('mime');


var server = http.createServer(function (req, res) {
    var url = req.url;
    //   /
    //   / 05.style.css
    //   / favicon.ico

    console.log(url);
    if(url == '/'){
        fs.readFile('./05.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type':'text/html;charset=utf-8'
            });
            // 如果是没有读取到的文件，data为undefined
            // console.log(data);
            res.write(data);
            res.end();
        });
    }else{
        fs.readFile(url.slice(1), function (err, data) {
            res.writeHead(200, {
                'Content-Type': mime.getType(url) + ';charset=utf-8'
            });
            // 如果是没有读取到的文件，data为undefined
            // console.log(data);
            res.write(data);
            res.end();
        });
    }
    


}).listen(80, 'www.nodestudy.com');