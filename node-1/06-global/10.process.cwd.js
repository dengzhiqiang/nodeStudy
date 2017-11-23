// cwd current working directory 当前工作目录
console.log(process.cwd()); // F:\github\node\node-1\06-global
console.log(__dirname);// F:\github\node\node-1\06-global

// 改变当前目录
process.chdir('..');
console.log(process.cwd());// F:\github\node\node-1
console.log(__dirname);// F:\github\node\node-1\06-global
console.log(process.cwd()); // F:\github\node\node-1

//重新指向当前目录
process.chdir(__dirname);
console.log(process.cwd());// F:\github\node\node-1\06-global






