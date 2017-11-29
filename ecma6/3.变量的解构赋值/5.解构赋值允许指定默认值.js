let [foo = true] = [];
foo // true

let [x, y = 'y'] = ['x']; // x='x', y='y'
let [z, w = 'w'] = ['z', undefined]; // z='a', w='w'


console.log(x,y,z,w);

// 注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。