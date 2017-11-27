{
    // let声明的代码块，只在当前的代码块中有效
    let a = 10;
    var b = '100';
}

// 100
console.log(b);

// ReferenceError: a is not defined
console.log(a);



