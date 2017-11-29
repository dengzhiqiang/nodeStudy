let [xundefined = 1] = [undefined];
// x = 1

let [xnull = 1] = [null];
// x = null

// 1
console.log(xundefined);

// null
console.log(xnull);

// 上面代码中，
// 如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。
