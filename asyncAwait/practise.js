
const fetch = require('node-fetch')

// 封装 fetch 返回 promise 对象。
function fetchUser(){
    return new Promise((resolve,reject)=>{
        fetch("https://api.github.com/users/yuanjie0-0")
        .then((data) => {
            resolve(data)
        },(error)=>{
            reject(error)
        })
        console.log("aligge")
    })
}

/**
 * use promise 方式来处理
 */

function getUserByPromise(){
    fetchUser()
    .then((data)=>{
        console.log(data.status)
    },(error)=>{
        console.log(error)
    })
}

getUserByPromise()


/**
 *  use Generator 方式解决
 */

 function* fetchUserByGenerator(){
        const user = yield fetchUser()
        return user                                     
 }

 const g = fetchUserByGenerator()
 const result = g.next().value;
 result.then((v)=>{
     console.log(v.size)
 },(error)=>{
     console.log(error)
 })

 /**
  * use async 的方式解决
  */

async function getUserByAsync(){
    try{

    }catch{

    }
    let user = await fetchUser()
    console.log(user.status)
    console.log("wullili")
    return user
}

getUserByAsync()
.then(v=>console.log(v.size))

/**
 * what is anysc? howt to cateh error and fix it?
 */

 var jie = 1;
 async function test1(){
     let res = await fetch("https://api.github.com/users/yuanjie0-0")
     jie = res;
     return res.body
     console.log('hello how are you')
     console.log(res.status)
     console.log(jie.status)
 }

test1().then(v=>console.log("hello"))


/**
 * async throw Expection? 
 */

 async function e(){
     throw new Error('error')
 }

 e().then(v=>console.log(v))
 .catch(e=>console.log(e))

 /**
  * async 函数返回的 promise 对象，还需要等到 内部多有的 await 命令 promise 对象
  * 执行完，才会发生状态改变
  */

const dealy =  timeout => new Promise(resolve=>setTimeout(resolve,timeout))

async function f(){
    await dealy(1000)
    await dealy(2000)
    return "done"
    await dealy(3000)
    await dealy(4000)
}

f().then(v=>console.log(v))


/**
 * 如上面所示，当 async 函数中只要一个 await 出现 reject 状态，则后面的 await 都不会被执行。
 * 两个 await 有一个出错，另一个 await 不会 执行
 */

 let a =0;
 async function b(){
    let a = await 1;
    //  await Promise.reject("error")
    console.log("yuanjei is a big idot?")
    return a
    }
b().then(v=>console.log('a is:' + v));


/**
 * 实际开发中，经常遇到一组异步操作，需要按照顺序完成。比如，依次远程读取一组 URL，然后按照读取的顺序输出结果。
 */

 // 下面这个函数 是请求 一组 url，然后 依次读取，但是有个问题是只能前一个 url 返回，后一个才能继续。
 async function LogInOrder(urls){
    for(const url of urls){
        const response = await fetch(url);
        console.log(await response.text())
    }
 }

// 如何并发所有操作
/**
 * @description urls.map() 生成一个 promise 的数组，return resposne.text() 相当于返回了一个 resolve()的值。
 * await顾名思义就是等待一会，只要await声明的函数还没有返回，那么下面的程序是不会去执行的！！！
 * 请记住await是在等待一个Promise的异步返回
 */
async function logInOrder1(urls) {
    // 并发读取远程URL
    const ips = [1,2,3].map(x=>x*2)
    console.log(ips)
    const textPromises =  urls.map(async url => {
      const response = await fetch(url); // awati 立即返回一个 promise 对象，这个时候 promise 对象是 pending 的。
      return response.text();            // 执行完 fetch(url)后，promise 的状态变为 resolved 输出
    });
    console.log("---------------")
    console.log(textPromises)
    // 按次序输出
    for (const textPromise of textPromises) {
      console.log(await textPromise);   //  await 等待一个 promise  的异步返回。
    }
  }

// IogInorder1() 是 async 双层嵌套，有点难懂。第一层利用 map()函数，将原来每一个 url 变换成一个 Promise。
// 然后遍历 map() 函数产生的 promise数组，对每一个 promise 进行 await , 输出 返回值。厉害。一般人想不到
let urls = ["https://api.github.com/users/yuanjie0-0","https://api.github.com/users/yuanjie0-0"]
logInOrder1(urls)


//  

async function testEN(){
    return "1"
}

console.log("---------------------------------------------")
console.log(testEN())