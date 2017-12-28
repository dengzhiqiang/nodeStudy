// __dirname 由于现在要使用绝对路径，现在目录一律使用__dirname
// 对象模式的entry,如果要生成多个文件，在path中要写成[name] 代表文件名称
// [chunkhash]代表打包的hash值 修改过的文件hash才会改变

// plugins 注意后面有一个s
// filename 是根据入口文件生成的，而html文件时根据path路径生成的

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: __dirname + '/src/script/main.js',
        main2: __dirname + '/src/script/main2.js'
    },

    // 打包的入口，就是从哪个文件开始,这两个文件会生成一个文件bundle.js中
    output: {
        path: __dirname + '/dist',//生成的文件放到这个文件夹去
        filename: 'js/[name]-bundle.js',// 打包后的文件名称
        publicPath: 'http://cdn.baidu.com/' // 上线使用的地址，也就是在html中script的src地址
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',// 指定生成的名称
            template: __dirname + '/index.html',
            inject: 'head', // 将所有的script的标签放到head头部中,如果为false，script就不会自动插入文件中
            title: 'htmlWebpackPlugin 生成的title！',
            date: new Date().toLocaleString(),
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true // 删除空格
            }
        }),
        new htmlWebpackPlugin({
            filename: 'deng.html',// 指定生成的名称
            template: __dirname + '/deng.html',
            inject: 'body', // 将所有的script的标签放到head头部中,如果为false，script就不会自动插入文件中
            chunks:['main2'] ,// 指定js
            // excludeChunks:['main2'] ,// 排除main2,记载其他的js
        })
    ]
};
console.log(htmlWebpackPlugin);