var number = [1, 2, 3, 4];
/**
 * （1） prev cur index array
 *       1    2    1          刚开始的时候 prev是数组的一项，cur是数组的第二项
 *       3    3    2          第一项和第二项的结果 + 第三项
 *       6    4    3
 *       10
 */


// reduce和reduceRight完全相同，只是后者从最后一个开始
var sum = number.reduce(function (prev, cur, index, array) {
    console.log(prev);
    console.log(cur);
    console.log(index);
    console.log(array);
    console.log('============================');


    // 返回的值坐为新的prev
    // index 是cur当前项的索引
    return prev + cur;

});
console.log(sum);