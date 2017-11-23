var EventEmitter = require('events');

var util = require('util');

function Person(name, age) {
    this.name = name;
    this.age = age;
}

util.inherits(Person, EventEmitter);


var p1 = new Person('deng', '18');
p1.on('getName', function () {
    console.log(this.name);
});


p1.emit('getName', function () {
    console.log(this.name);
});



