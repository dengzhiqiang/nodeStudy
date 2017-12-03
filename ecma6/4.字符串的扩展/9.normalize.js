// ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式
// 这称为 Unicode 正规化。

'\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true