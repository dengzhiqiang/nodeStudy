function bar(x = y, y = 2) {
    // 类似于下面这种方式
    // let x = y
    // let y = 2
    return [x, y];
}

// ReferenceError: y is not defined
// 参数x等于y，而y还没有声明，属于“死区”，
bar();