// 从前面的例子可以看出，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。
//
// 为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

// export-default.js
// export default function () {
//     console.log('foo');
// }

export default {
    data() {
        return {
            hello: 'hello!'
        }
    }
};

// 等价于
// export default {
//     data: function () {
//         hello: 'hello!'
//     }
// }