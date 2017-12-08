// 如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。

let greeting = `\`Yo\` World!`;
// 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。

$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>`);
// 上面代码中，所有模板字符串的空格和换行，都是被保留的，
// 比如<ul>标签前面会有一个换行。如果你不想要这个换行，可以使用trim方法消除它。

$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());