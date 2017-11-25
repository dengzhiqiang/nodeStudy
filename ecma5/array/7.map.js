// 数组中每一项运行给定函数
// 在原数组的项目上，加1，然后返回新的数组，不更改原来的数组

var number = [1, 2, 3, 4, 5, 6];
var res = number.map(function (item, index, array) {
    // 数组的索引
    console.log(index);

    // 原数组
    console.log(array);

    // 每一项+1
    return item + 1;
});

// 2,3,4,5,6,7
console.log('都是大于2的新数组: ' + res);

// [ 1, 2, 3, 4, 5, 6 ] 原来的值不变
console.log(number);