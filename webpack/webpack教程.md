### 学习地址
    https://www.jianshu.com/p/cd123afa196a
    https://github.com/ruanyf/webpack-demos#demo01-entry-file-source
    http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html
    
    https://doc.webpack-china.org/concepts/

### 首先，在全局环境中安装Webpack和webpack-dev-server
    npm i -g webpack webpack-dev-server

### webpack-dev-server
    (1) 即时刷新浏览器
    (2) 启动了一个使用express的Http服务器    
    (3) 原始文件作出改动后，webpack-dev-server会实时的编译，但是最后的编译的文件并没有输出到目标文件夹,实时编译后的文件都保存到了内存当中
    
    (4) 启动webpack-dev-server有2种方式：
    
    通过cmd line
    通过Node.js API