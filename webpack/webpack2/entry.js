require('./css.js');

// 指定loader
// style-loader 让css生效
// css-loader 加载css文件
require('style-loader!css-loader!./header.css');

function hello() {
    alert('hello!');
}

hello();
