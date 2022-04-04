//Node里面执行的就是js  node只是js的一个运行环境而已
//编程的方式和其他的语言一样

var http = require("http"); //http模块

var server = function(req,resp){
	resp.end("ok"); //响应数据
};

var server = http.createServer(service); //创建服务
server.listen("9000",err=>{ //回调函数
	console.log("启动成功");
})