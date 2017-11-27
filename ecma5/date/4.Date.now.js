// 获取当前时间
// ecma5方法 Date.now()
var start = Date.now();
for (var i = 0; i < 100000000; i++) {
}
var stop = Date.now();
var res = stop - start;
console.log(res);