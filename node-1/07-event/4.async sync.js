var EventEmitter = require('events');
var util = require('util');

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function () {
    console.log(this.name);
};
Person.prototype.getAge = function () {
    console.log(this.age);
};
// 继承
util.inherits(Person, EventEmitter);
// EventListener 会按照监听器注册的顺序同步地调用所有监听器。 所以需要确保事件的正确排序且避免竞争条件或逻辑错误。 监听器函数可以使用 setImmediate() 或 process.nextTick() 方法切换到异步操作模式




