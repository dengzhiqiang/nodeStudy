// Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。

var input = [1, 2];
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
    return item + 1;
});
// 上面的原始代码用了箭头函数，Babel 将其转为普通函数，就能在不支持箭头函数的 JavaScript 环境执行了。


// 转换方式多种多样，不一一详解