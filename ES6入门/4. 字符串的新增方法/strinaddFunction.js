

/*
* String.fromCodePoint
* */
console.log(String.fromCodePoint(0x20BB7))

/*
*  string.raw
* 该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。
* 理解就是: 如果 直接输出 '\n' 则为换行，但是用 row 的话 就输出 \n
* */

console.log(String.raw`Hi\n${2+3}!`)
console.log(String.raw`HI`)
console.log(`Hi\n${2+3}!`)


String.raw = function (strings, ...values) {
    let output = '';
    let index;
    for (index = 0; index < values.length; index++) {
        output += strings.raw[index] + values[index];
    }

    output += strings.raw[index]
    return output;
}