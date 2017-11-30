// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

let [x=2, y = x] = [1];
console.log(x);

let novalue;
novalue = 10;
// 10
console.log(novalue);




