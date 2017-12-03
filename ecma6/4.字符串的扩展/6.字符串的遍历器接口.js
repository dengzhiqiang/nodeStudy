for (let codePoint of 'foo') {
    console.log(codePoint)
}
// "f"
// "o"
// "o"
    
// 除了遍历字符串，
// 这个遍历器最大的优点是可以识别大于0xFFFF的码点，
// 传统的for循环无法识别这样的码点。



// 除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，
// 传统的for循环无法识别这样的码点。

let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
// " "
// " "

for (let i of text) {
    console.log(i);
}   
// "𠮷"
// 上面代码中，字符串text只有一个字符，但是for循环会认为它包含两个字符（都不可打印），
// 而for...of循环会正确识别出这一个字符。