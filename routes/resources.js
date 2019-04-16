/**
 * 可以用exports把想要对外公开的函数封装成模块（node提供）
 */
"use strict";
const fs = require("fs");
exports.sendHtml = function (request,response) {
    let url = request.url;
    console.log(url);
    fs.readFile("public"+url,"utf-8",function (err,data) {
        if(err==null || err==undefined){
            response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
            response.write(data);
            response.end();
        }

    });
};
exports.sendCss = function (request,response) {
    let url = request.url;
    fs.readFile("public"+url,"utf-8",function (err,data) {
        if(err==null || err==undefined){
            response.writeHead(200,{"content-type":"text/css;charset=utf-8"});
            response.write(data);
            response.end();
        }

    });
};
exports.sendJs = function (request,response) {
    let url = request.url;
    fs.readFile("public"+url,"utf-8",function (err,data) {
        if(err==null || err==undefined){
            response.writeHead(200,{"content-type":"text/javascript;charset=utf-8"});
            response.write(data);
            response.end();
        }

    });
};
exports.sendImg = function (request,response) {
    let url = request.url;
    fs.readFile("public"+url,function (err,data) {
        if(err==null || err==undefined){
            response.writeHead(200,{"content-type":"text/html"});
            response.write(data);
            response.end();
        }

    });
};
