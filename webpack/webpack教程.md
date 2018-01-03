### 学习地址
    https://www.jianshu.com/p/cd123afa196a
    https://github.com/ruanyf/webpack-demos#demo01-entry-file-source
    http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html
    
    https://doc.webpack-china.org/concepts/
    https://www.webpackjs.com/loaders/  中文网站


### 首先，在全局环境中安装Webpack和webpack-dev-server
    npm i -g webpack webpack-dev-server

### webpack-dev-server
    (1) 即时刷新浏览器
    (2) 启动了一个使用express的Http服务器    
    (3) 原始文件作出改动后，webpack-dev-server会实时的编译，但是最后的编译的文件并没有输出到目标文件夹,实时编译后的文件都保存到了内存当中
    
    (4) 启动webpack-dev-server有2种方式：
    
    通过cmd line
    通过Node.js API

### npm install html-webpack-plugin --save-dev
    
    

### 常用命令 
    webpack --help 显示所有命令
    webpack entry.js entry.bundle.js --module-bind "css=style-loader!css-loader" 绑定模块， 要用双引号 括起来
    --progress 显示过程
    --display-modules 显示模块
    --watch 监听
    --display-reasons 显示为什么要打包这个模块，通常也就是哪里加载了
    
    webpack --config webpack.dev.config.js 直接运行开发版本的配置，默认是webpack.config.js

### file-loader 图片处理    
### url-loader 