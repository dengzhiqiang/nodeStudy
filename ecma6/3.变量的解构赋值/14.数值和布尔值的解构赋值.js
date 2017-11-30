let {toString: num} = 123;

// true
console.log(num === Number.prototype.toString);

let {toString: bool} = true;

// true
console.log(bool === Boolean.prototype.toString);

// 上面代码中，数值和布尔值的包装对象都有toString属性，因此变量都能取到值。
// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。