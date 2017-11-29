// 如果真的想将对象冻结，应该使用Object.freeze方法。
"use strict";
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
// TypeError: Can't add property prop, object is not extensible
foo.prop = 123;