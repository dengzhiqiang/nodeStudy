// __dirname 由于现在要使用绝对路径，现在目录一律使用__dirname


module.exports = {
    entry: [__dirname + '/src/script/main.js', __dirname + '/src/script/main2.js'],
    // 打包的入口，就是从哪个文件开始,这两个文件会生成一个文件bundle.js中
    output: {
        path: __dirname + '/dist/js',//打包后文件放到哪个文件夹去
        filename: 'bundle.js'// 打包后的文件名称
    }
};