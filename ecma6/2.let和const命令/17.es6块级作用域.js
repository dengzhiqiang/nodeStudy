function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}

f1();
// 上面的函数有两个代码块
// 外层的代码块不受内层的影响