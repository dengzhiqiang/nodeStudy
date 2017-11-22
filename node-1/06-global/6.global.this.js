var name = '邓志强'
exports.name = name;
exports.getName = function () {
    console.log(this.name);
}

// this就是exports这个对象
console.log(this);
this.getName();

// 跟踪代码运行
// console.trace();

// node中js的运行，相当于在把js代码包含在了
// function xxx(module,exports,require,__dirname,__filename){
//     // 类似这样的运行环境中
// }


// 监听
// process.stdin 进程标准输入对象
process.stdin.on('data', function (data) {
    console.log(data);
});
process.stdout.write('hello!')
console.log('标准进程id：'+ process.pid);


