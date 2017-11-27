var a = [];
for (var i = 0; i < 5; i++) {
    a[i] =  function () {
        console.log(i);
    }
}

// 5，执行完成后最后使用的变量仍然是全局的i
a[2]();

