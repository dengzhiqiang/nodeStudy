function fn() {
    console.log(111);
    return 1111;
}

let [x = fn()] = [1];
// 上面代码中，因为x能取到值，所以函数f根本不会执行
// 1
console.log(x);