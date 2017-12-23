// 同样的，function和class的输出，也必须遵守这样的写法。

// 报错
function fa() {};
export fa;

// 正确
export function fb() {};

// 正确
function f() {}
export {f};
// 另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。