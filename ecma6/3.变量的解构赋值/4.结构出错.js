// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构
// 上面的语句都会报错，因为等号右边的值，
// 要么转为对象以后不具备 Iterator 接口（前五个表达式），
// 要么本身就不具备 Iterator 接口（最后一个表达式）。


// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};