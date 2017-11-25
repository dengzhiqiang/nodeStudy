// 数组中每一项运行给定函数
// 如果该函数对每一项都返回true，则返回true
var number = [1, 2, 3, 4, 5, 6];

var res = number.every(function (item, index, array) {

    // 数组的索引
    console.log(index);

    // 原数组
    console.log(array);

    // 判断数组的每一项都是都大于2，如果都大于2,就会返回true，否则false
    return item > 2
});

console.log('当前数组的每一项是否都>2: '+res);