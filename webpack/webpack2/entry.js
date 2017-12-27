require('./css.js');

// 指定loader
// style-loader 让css生效
// css-loader 加载css文件
// 或者下面不写loader，而命令行的时候，直接用下面的这句命令
// 要用双引号 括起来
// webpack hello.js hello.bundle.js --module-bind "css=style-loader!css-loader"
// require('style-loader!css-loader!./header.css');
require('./header.css');

function hello() {
    alert('hello!');
}

hello();
