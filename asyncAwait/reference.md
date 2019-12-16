
referece:
[掘金](https://juejin.im/post/596e142d5188254b532ce2da)


## what is async?
> async function is Gernerator function sugar. Use async to show it. 


async 函数返回一个 Promise 对象
async 函数内部 return 返回的值。会成为 then 方法回调函数的参数。

如果 async 函数内部抛出异常，则会导致返回的 Promise 对象状态变为 reject 状态。抛出的错误而会被 catch 方法回调函数接收到。

async 函数返回的 Promise 对象，必须等到内部所有的 await 命令的 Promise 对象执行完，才会发生状态改变



定义为 async 的函数里，返回的可以是是  Promise 对象，也可以是 字符串。也可以是 await 

定义为 async 的函数，执行后返回的是一个 promise 对象，是 promise 对象就有 then()方法，reject()方法。

来理清一下思路

定义一个函数为 async 函数，那么执行这个函数返回的就是一个 promise 对象。 函数体里return 的就是 resolve() 方法传递的值。 如果出现错误，那么错误的值就会触发 reject()。

同时有一个比较特殊的情况: 如果是 ajax 请求 api
那么 ajax 的 代码最好写在 promise 中。

因为如果不写的话，你即使定义了一个 async 函数。执行的时候，调用了 ajax 函数，那么也是异步执行。也会先返回ajax 下面的代码。只有将 ajax 的代码封装成 Promise。 

具体的例子看practis.js 最开始的例子。



------我是分隔线----------

> Q1: 如果我需要请求很多的 api，然后将结果放到统一个数组中，怎么做？
实际开发中，经常遇到一组异步操作，需要按照顺序完成。比如，依次远程读取一组 URL，然后按照读取的顺序输出结果。

> 看 pratise.js 中最后一个例子。


还有个链接讲的很好，我一直没有明白 await 是什么？请记住await是在等待一个Promise的异步返回
> let name = await Promise.resolved"我是谁")}
> name is "我是谁"


[look this link ](https://segmentfault.com/a/1190000016788484?_ea=4854890)