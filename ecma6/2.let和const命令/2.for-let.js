// 计数器i只在循环体内有效
for(let i =0;i<5;i++){
    console.log(i);
}
// 0
// 1
// 2
// 3
// 4



// ReferenceError: i is not defined
console.log(i);
