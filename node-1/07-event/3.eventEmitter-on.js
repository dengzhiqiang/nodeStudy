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

var xiaoming = new Person('xiaoming', '18');
var zhangsan = new Person('zhangsan', '90');

xiaoming.on('myNameAndAge', function () {
    // 这里的this 指向的是前面的对象
    this.getName();
});
xiaoming.on('myNameAndAge', function () {
    this.getAge();
});


// 注册监听事件
zhangsan.on('myNameAndAge', function () {
    this.getName();
});
zhangsan.on('myNameAndAge', function () {
    this.getAge();
});

// 触发事件
xiaoming.emit('myNameAndAge');
zhangsan.emit('myNameAndAge');






























