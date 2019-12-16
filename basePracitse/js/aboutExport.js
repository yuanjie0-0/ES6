// const sqrt = Math.sqrt;
// function  square(x){
// 	return x*x;
// }
// function diag(x, y){
// 	return sqrt(square(x) + square(y));
// };

// export(sqrt, square, diag);

var http = require("http");
http.createServer(function(requset, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	// 发送相应数据
	response.end('hello World\n');
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/");