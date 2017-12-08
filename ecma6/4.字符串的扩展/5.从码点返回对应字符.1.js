// ES6 提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，
// 弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。

String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true
// 上面代码中，如果String.fromCodePoint方法有多个参数，
// 则它们会被合并成一个字符串返回。


// 注意，fromCodePoint方法定义在String对象上，
// 而codePointAt方法定义在字符串的实例对象上。

