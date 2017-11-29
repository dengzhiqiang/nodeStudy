// 如果解构不成功，变量的值就等于undefined。

let [a, [b, c]] = [1, [1, 2]];
console.log(a); // 1
console.log(b); // 1
console.log(c); // 2
console.log("========================================");

let [x, , y] = [1, [1, 2]];
console.log(x); // 1
console.log(y); // undefined
console.log("========================================");


let [head,,...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); //[ 3, 4 ]
console.log("========================================");


let [e,f,...g] = ['e'];
console.log(e); // e
console.log(f); // undefined
console.log(g); // []
