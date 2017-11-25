// 数组中每一项运行给定函数
// 如果有一项true 则为true
var number = [1, 2, 3, 4, 5, 6];

// 可以判断，数组中是否有一项大于2
var res = number.some(function (item, index, array) {

    // 数组的索引
    console.log(index);

    // 原数组
    console.log(array);

    // 判断数组的每一项都是都大于2，如果都大于2,就会返回true，否则false
    return item > 2
});

console.log('当前数组的有任意一项大于2: ' + res);