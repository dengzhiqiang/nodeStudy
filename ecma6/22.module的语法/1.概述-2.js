// ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。

// ES6模块
// SyntaxError: Unexpected token import
import { stat, exists, readFile } from 'fs';

console.log(stat);
console.log(exists);
console.log(readFile);

// 上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。
//
// 由于 ES6 模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。
//
// 除了静态加载带来的各种好处，ES6 模块还有以下好处。
//
// 不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点。
// 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
// 不再需要对象作为命名空间（比如Math对象），未来这些功能可以通过模块提供。