// 只要块级作用域存在let命令，它所声明的变量就绑定在这个区域，不再受外部的影响
var temp = 123;
if (true) {
    temp = 'abc';
    let temp;
}


// ReferenceError: temp is not defined
// 上面的代码中，全局变量temp，但是块级作用域内用声明了temp，导致temp绑定在块中，在let之前
// 赋值会报错
