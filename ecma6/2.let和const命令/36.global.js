// 现在有一个提案，在语言标准的层面，引入global作为顶层对象。也就是说，在所有环境下，global都是存在的，都可以从它拿到顶层对象。

// 垫片库system.global模拟了这个提案，可以在所有环境拿到global。

// CommonJS 的写法
require('system.global/shim')();

// ES6 模块的写法
import shim from 'system.global/shim';

shim();
// 上面代码可以保证各种环境里面，global对象都是存在的。

// CommonJS 的写法
var global = require('system.global')();

// ES6 模块的写法
import getGlobal from 'system.global';

const global = getGlobal();
// 上面代码将顶层对象放入变量global。