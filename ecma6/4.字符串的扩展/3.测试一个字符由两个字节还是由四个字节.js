// codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。

function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}
 

console.log(is32Bit("𠮷")); // true
console.log(is32Bit("a")); // false

