/**
 *
 * @constructor
 */
function Person(name) {
    this.name = name;
    this._events = {};
}

// 注册监听
Person.prototype.on = function (eventName, callback) {
    // console.dir(this._events[eventName]); // undefined
    if (this._events[eventName]) {
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
};


// 发布
Person.prototype.emmit = function (eventName) {
    var self = this;
    this._events[eventName].forEach(function (callback) {
        // 匿名函数中的this是global对象
        console.log(this === global);
        callback(self);
    })
};

var bird = new Person('天使');
bird.on('一只鸟', function () {
    console.log('一只鸟!');
});
bird.on('会飞', function () {
    console.log('会飞');
});

bird.on('会飞', function () {
    console.log('会飞的更高！');
});


// 发布
// console.log(bird);
bird.emmit('一只鸟');
bird.emmit('会飞');



