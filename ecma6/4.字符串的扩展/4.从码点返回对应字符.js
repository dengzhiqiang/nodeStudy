// ES5 提供String.fromCharCode方法，用于从码点返回对应字符，
// 但是这个方法不能识别 32 位的 UTF - 16 字符（Unicode 编号大于0xFFFF）。

String.fromCharCode(0x20BB7)
// "ஷ"
// 上面代码中，String.fromCharCode不能识别大于0xFFFF的码点，
// 所以0x20BB7就发生了溢出，最高位2被舍弃了，
// 最后返回码点U + 0BB7对应的字符，而不是码点U + 20BB7对应的字符。