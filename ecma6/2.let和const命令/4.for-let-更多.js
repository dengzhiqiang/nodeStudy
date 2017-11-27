var a = [];
for (let i = 0; i < 5; i++) {
    a[i] = function () {
        console.log(i);
    }
}

// let声明的 变量，只在本循环有效，也就是本代码块，for循环会记住上一轮循环的值，在下一轮中重新初始化

// 2
a[2]();

