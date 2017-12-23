// 通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

function v1() {
}

function v2() {
}

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
};

// 上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。
// 需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

// 报错
// export 1;

// 报错
// var m = 1;
// export m;

// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
// 上面三种写法都是正确的，规定了对外的接口m。其他脚本可以通过这个接口，取到值1。它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系。



























