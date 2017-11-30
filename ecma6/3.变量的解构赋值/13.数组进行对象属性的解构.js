let me = ['deng', 19, 'man'];

// 这里是中括号，而不是小括号
let {0: first, [me.length - 1]: last} = me;

// deng
console.log(first);

// man
console.log(last);


//上面代码对数组进行对象解构。数组arr的0键对应的值是deng，[arr.length - 1]就是2键，对应的值是man。方括号这种写法，属于“属性名表达式”，参见《对象的扩展》一章。