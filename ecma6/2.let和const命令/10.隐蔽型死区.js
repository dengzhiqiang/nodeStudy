function bar(x = 2, y = x) {
    // let x = 2;
    // let y = x;
    return [x, y];
}

// 这种方式相当于声明了x了
console.log(bar());
