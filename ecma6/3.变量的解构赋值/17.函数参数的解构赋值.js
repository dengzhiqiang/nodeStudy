// 注意，下面的写法会得到不一样的结果。

function move({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}

console.log(move({ x: 3 }));
// [3, undefined]

// 上面代码是为函数move的参数指定默认值，
// 而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
