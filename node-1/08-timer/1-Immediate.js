// timer 模块暴露了一个全局的 API，用于在某个未来时间段调用调度函数。 因为定时器函数是全局的，所以使用该 API 无需调用 require('timers')。
//
// Node.js 中的计时器函数实现了与 Web 浏览器提供的定时器类似的 API，除了它使用了一个不同的内部实现，它是基于 Node.js 事件循环构建的。

//Immediate 类#
// 该对象是内部创建的，并从 setImmediate() 返回。 它可以传给 clearImmediate() 以便取消预定的动作。

// 预定定时器#
// Node.js 中的计时器是一种会在一段时间后调用给定的函数的内部构造。 定时器函数何时被调用取决于用来创建定时器的方法以及 Node.js 事件循环正在做的其他工作。
//
// setImmediate(callback[, ...args])#
// 新增于: v0.9.1
// callback <Function> 在 Node.js 事件循环的当前回合结束时要调用的函数。
// ...args <any> 当调用 callback 时要传入的可选参数。
// 预定立即执行的 callback，它是在 I/O 事件的回调之后被触发。 返回一个用于 clearImmediate() 的 Immediate。
//
// 当多次调用 setImmediate() 时，callback 函数会按照它们被创建的顺序依次执行。 每次事件循环迭代都会处理整个回调队列。 如果一个立即定时器是被一个正在执行的回调排入队列的，则该定时器直到下一次事件循环迭代才会被触发。

// 如果 callback 不是一个函数，则抛出 TypeError。
// 注意：此方法具有可用util.promisify()提供的promises常用变体：


















