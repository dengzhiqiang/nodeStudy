process.on('uncaughtException',function (e) {
    // 没人管的异常都会到这里来
    console.log(e.message);
});
// 本来会报错的,但是报错后会执行 uncaughtException 这个里面去
console.log(b);