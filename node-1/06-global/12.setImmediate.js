/**
 * 先执行nextTick
 * 再 setTimeout
 * 再 setImmediate
 * 再 readFile
 * 再异步IO
 */
var fs = require('fs');


setImmediate(function () {
    console.log('setImmediate-1');
    setImmediate(function () {
        console.log('setImmediate-2');
    });
});

setTimeout(function () {
    console.log('setTimeout');
}, 0);

fs.readFile('./12.setImmediate.txt', function (err, data) {
    console.log('readFile' + data);
});

process.nextTick(function () {
    console.log('nextTick');
    process.nextTick(function () {
        console.log('nextTick');
    });
});
