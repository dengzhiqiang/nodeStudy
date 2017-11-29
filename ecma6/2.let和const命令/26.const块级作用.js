// const的作用域与let命令相同：只在声明所在的块级作用域内有效。
// 必须要有括号包起来
// if (true) const NUM = 1;
// SyntaxError: Unexpected token const

if (true) {
    const NUM = 1;
}

//ReferenceError: NUM is not defined
console.log(NUM);