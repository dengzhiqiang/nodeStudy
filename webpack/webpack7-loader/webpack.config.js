var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-min.js',
        // publicPath:''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: __dirname + '/node_modules/',
                include: __dirname + '/src/',
                loader: "babel-loader",
                // query:{
                //     presets:['latest']
                // }
            },
            {

                test: /\.css$/,
                // exclude: __dirname + '/node_modules/',
                // include: __dirname + '/src/', 如果这里有include 就会报错，不知道为啥
                // ERROR in ./src/components/layer/layer.css·
                // Module parse failed: Unexpected token (1:5)
                // You may need an appropriate loader to handle this file type.
                // | body {
                // |     background: #000;
                // | }

                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.less$/,
                // 不仅要安装less-loader，还要安装less
                use: [
                    "style-loader", "css-loader", "less-loader"
                ]
            }
            ,
            {
                test: /\.sass$/,
                // 不仅要安装sass-loader，还要安装sass
                use: [
                    "style-loader", "css-loader", "sass-loader"
                ]
            }
            ,
            {
                test: /\.html$/,
                // 不仅要安装sass-loader，还要安装sass
                use: [
                    "style-loader", "css-loader", "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
};