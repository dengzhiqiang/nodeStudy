// JavaScript 内部，字符以 UTF-16 的格式储存，
// 每个字符固定为2个字节。对于那些需要4个字节储存的字符
// （Unicode 码点大于0xFFFF的字符），
// JavaScript 会认为它们是两个字符。

var s = "𠮷";

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271


// 上面代码中，汉字“𠮷”（注意，这个字不是“吉祥”的“吉”）的码点是0x20BB7
// ，UTF - 16 编码为0xD842 0xDFB7（十进制为55362 57271），
// 需要4个字节储存。对于这种4个字节的字符，JavaScript 不能正确处理，
// 字符串长度会误判为2，而且charAt方法无法读取整个字符，
// charCodeAt方法只能分别返回前两个字节和后两个字节的值。

// ES6 提供了codePointAt方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。

let s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97