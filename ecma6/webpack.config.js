module.exports = {
    entry: './22.module的语法/app.js',
    output: {
        path: __dirname,
        filename: './22.module的语法/app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};