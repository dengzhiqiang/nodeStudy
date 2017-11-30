// ReferenceError: y is not defined
// 报错，是因为x用到默认值y时，y还没有声明。
let [x = y, y = 1] = [];
