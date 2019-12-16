
/*
* 2. 字符串的遍历器接口
* */
for (let codePoint of 'foo'){
    console.log(codePoint)
}

let text= String.fromCodePoint(0x20BB7)
console.log(text)
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
for (let i of text) {
    console.log(i)
}
//上面代码中，字符串text只有一个字符，但是for循环会认为它包含两个字符（都不可打印），而for...of循环会正确识别出这一个字符。

/*
* 模板字符串（重要）
* */

let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)

// let func = (name) => `Hello ${name}!`;

let func = (name) =>{
    return `Hello ${name}!`;
}
console.log(func('yunjie'))


let a = 5;
let b = 10;

let tag = ([x,y,],j,k) =>{
    return [x,y,j,k]
}
console.log(tag`Hello ${ a + b } world ${ a * b }`)
// 等同于
console.log(tag(['Hello ', ' world ', ''], 15, 50))

/*
* 复原
 */

let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
    console.log(literals)
    console.log(arguments)  // arguments 是啥?
    let result = '';
    let i = 0;

    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }

    return result;
}

console.log(msg)