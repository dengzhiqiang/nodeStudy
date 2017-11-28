
var temp = Date.now();

function fn() {
    console.log(temp); // undefined
    if(false){
        var temp = '函数作用域，变量声明提前';
    }
}

fn();