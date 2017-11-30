// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
// 下面这个函数被赋值的是 getNameName,而getName只是去找后面的对象的属性
let {getName: getNameName, getSex, getAge} = {
    getName: function () {
        console.log(arguments.callee);
    },
    getSex: function () {
        console.dir(arguments.callee);
    }
};

// [Function: getName]
console.log(getNameName);

//ReferenceError: getName is not defined
console.log(getName);
