// undefined，此时这会有提升变量的声明，所有varvar有一个值是undefined
console.log(varvar);
var varvar = 'varvar';



// 在声明之前letlet是不存在的，所以会报错
// ReferenceError: letlet is not defined
console.log(letlet);
let letlet = 'letlet';

