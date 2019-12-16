
let [foo,[[bar],baz]] = [1,[[2],3]]
console.log(bar)
console.log(baz)

let [head, ...tail] = [1,2,3,5]
console.log(tail)

let [x,y,z] = new Set(['a','b','c'])

console.log(x)

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a+b]
    }
}

let [first, second,third,fourth,firth] = fibs()
console.log(firth)


let [w, q = 'b'] = ['a', undefined];
console.log(q)

let [j=1] = [undefined]

console.log(j)

// let { log, sin, cos } = Math;
const { log } = console;
console.log(log)


const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

let { loc, loc: { start }, loc: { start: { line }} } = node;
console.log(line,loc,start)

let arr = [1, 2, 3];
let {0 : one, [arr.length - 1] : last} = arr;

console.log(one,last)


// function move( {x = 0,y = 0 } = {}) {
//     return [x , y]
// }
//
// function move1( {x,y} = {x:0,y:0}) {
//
// }

// 变量的解构赋值用途

/*
*  1. 两个变量交换值
* */
let yuanjie = 1;
let jieyuan = 2;

[yuanjie, jieyuan] = [jieyuan,yuanjie]
console.log(yuanjie,jieyuan)



