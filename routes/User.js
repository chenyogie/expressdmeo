
const executeSql = require("./executeSql");
//定义一个user对象
var user={
    //login方法
    login:function (request,response) {
        let name = request.body.username;
        let pwd = request.body.password;
        let sql = "select * from user where name=? and pwd=?";
        executeSql.setSql(sql,[name,pwd],function (err,data) {
            if(data!=undefined && data.length!=0){
                response.redirect("pages/200.html");
            }else{
                response.redirect("pages/404.html");
            }
        });
    }
};
//将user对象公开出去
module.exports=user;