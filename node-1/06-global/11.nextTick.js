setTimeout(function () {
    // 会等单线程运行完毕后运行
    // 放在下一个队列的顶部
    console.log(Math.random());
}, 0);

// 放在当前队列的底部
process.nextTick(function () {
    console.log('nextTick-1');
    process.nextTick(function () {
        console.log('nextTick-2');
    });
});

console.log('a');
console.log('b');
console.log('c');
for (var i = 0; i < 10000000; i++) {

}
console.log('d');

