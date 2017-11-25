// 查找项在数组中的位置,在没有找到的情况下返回-1
// indexOf 位置0向后开始找
// lastIndexOf 从数组的末尾向前找
// IE9+ 支持
var number = ['a', 'b', 'c', 'd','A','B'];
console.log(number.indexOf('a')); // 0
console.log(number.indexOf('e')); // -1

console.log(number.indexOf('a',0)); // 0
console.log(number.indexOf('a',1)); // -1 从索引1位置开始找
