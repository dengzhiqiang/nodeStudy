// 获取当前时间
// ecma5方法 Date.now()
// 使用+将日期转为字符串
var start = +new Date();
for (var i = 0; i < 100000000; i++) {
}
var stop = +new Date();
var res = stop - start;
console.log(res);