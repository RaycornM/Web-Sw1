//Node里面执行的就是js  node只是js的一个运行环境而已
//编程的方式和其他的语言一样
//node中的web应用框架  express 基于http的
//1.安装模块 2.使用 3.监听

var express = require("express");

var app = express();

//原生态代码中 get post （静态资源处理）
//http://localhost:9000/css/fdsk.css
//static("相对与当前的服务文件的路径")
app.use("/css/",express.static("../css/"));
app.use("/js/",express.static("../js/"));
app.use("/img/",express.static("../img/"));
app.use("/html/",express.static("../html/"));
//以上代码就是指引所有的静态资源的访问

//app.get app.post
//第一个参数是请求参数  第二个参数是一个回调函数
//req 请求  resp 响应  next()现在不使用  放行函数(session,拦截器)
app.post("/getdata.do",(req,resp,next)=>{
	var data=[{
					sid:"s01",
					sname:"华为手机",
					spic:7000, //单价
					snum:0, //数量
					ssum:0, //总价

				},{					
					sid:"s02",
					sname:"小米手机",
					spic:3000, //单价
					snum:0, //数量
					ssum:0, //总价
					},{
						sid:"s03",
						sname:"OPPO",
						spic:4000, //单价
						snum:0, //数量
						ssum:0, //总价
					}
			]
});

app.listen(9001,(err)=>{
	if(err) console.log(err);
	else console.log("ok");
});

// var http = require("http"); //http模块

// var server = function(req,resp){
// 	resp.end("ok"); //响应数据
// };

// var server = http.createServer(service); //创建服务
// server.listen("9000",err=>{ //回调函数
// 	console.log("启动成功");
// })