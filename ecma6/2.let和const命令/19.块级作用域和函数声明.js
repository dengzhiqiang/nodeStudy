function f1() {
    console.log('i am outside');
}

(function () {
    if (false) {
        function f1() {
            console.log('i am inside!');
        }
    }
    f1();
})();

// TypeError: f1 is not a function


// ===============================
// 和下面的等价
// ===============================

(function () {
    // 这里相当于函数声明提前
    var f1 = undefined;
    if (false) {
        // 这里相当于声明了函数
        function f1() {
            console.log('i am inside!');
        }
    }
    f1();
})();

// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。
// 如果确实需要，也应该写成函数表达式，而不是函数声明语句