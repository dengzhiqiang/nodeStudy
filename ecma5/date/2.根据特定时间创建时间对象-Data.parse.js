// 根据特定时间创建时间对象,必须在时间对象中传入时间的毫秒数
// 毫秒数是从1970.1.1到特定的时间
// Data.parse();接受一个日期格式的字符串。最后返回一个毫秒数
// 这个参数的格式不固定
//2017-11-26T16:00:00.000Z
var data = new Date(Date.parse('11/27/2017'));
console.log(data);


// new Date会自动调用parse方法
// 2017-11-26T16:00:00.000Z
var data2 = new Date('11/27/2017');
console.log(data2);


//2017-11-27T01:49:49.138Z
var data3 = new Date();
console.log(data3);