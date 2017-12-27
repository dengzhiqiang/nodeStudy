// __dirname 由于现在要使用绝对路径，现在目录一律使用__dirname
// 对象模式的entry,如果要生成多个文件，在path中要写成[name] 代表文件名称
// [chunkhash]代表打包的hash值 修改过的文件hash才会改变

module.exports = {
    entry: {
        main: __dirname + '/src/script/main.js',
        main2: __dirname + '/src/script/main2.js'
    },

    // 打包的入口，就是从哪个文件开始,这两个文件会生成一个文件bundle.js中
    output: {
        path: __dirname + '/dist/js',//打包后文件放到哪个文件夹去
        filename: '[name]-bundle.js'// 打包后的文件名称
    }
};