// 只要块级作用域存在let命令，它所声明的变量就绑定在这个区域，不再受外部的影响
var temp = 123;
if (true) {
    // 只在块中有效
    let temp;
    temp = 'abc';
}

// 123
console.log(temp);

// es6中明确规定，如果区块中存在let和const命令，那么在这个区块中一开始就会形成一个，封闭的作用域
// 如果在let之前使用就会报错



