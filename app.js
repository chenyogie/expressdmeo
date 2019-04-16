//express模块
const mypress = require("express");
const app = mypress();
//文件模块
const fs = require("fs");
//User模块
const user = require("./routes/User");
/**
 * 配置服务器信息
 */
app.configure(function () {
    //日志模块
    app.use(mypress.logger("dev"));
    //处理post请求的配置
    app.use(mypress.bodyParser());
    //非get请求转换为post请求，put delete等请求
    app.use(mypress.methodOverride());
    //配置静态资源路径
    app.use(mypress.static(__dirname + "/public"));
    //配置网站标题处头标
    app.use(mypress.favicon(__dirname + "/public/img/icon.jpg"));
    //错误模块 把错误信息打印在控制台
    app.use(mypress.errorHandler());
});
//监听服务器
app.listen("8080","127.0.0.1",function () {
    console.log("服务器启动！");
});
//拦截post请求，调用user中的login方法    相当于配置
app.post("/login.do", user.login);

