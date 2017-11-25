// 数组中每一项运行给定函数
// 无返回值 和for循环数组一样

var number = [1, 2, 3, 4, 5, 6];

var res = number.forEach(function (item, index, array) {

    // 数组的索引
    console.log(index);

    // 原数组
    console.log(array);
    item += 1;
});

// undefined
console.log('都是大于2的新数组: ' + res);

// [ 1, 2, 3, 4, 5, 6 ] 原来的值不变
console.log(number);