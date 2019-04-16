//引用mysql模块
const mysql = require("mysql");
//配置数据库，执行sql
const executeSql ={
    //配置数据库信息
    mysqlConfig:{
        host:'localhost',
        user:'root',
        password:'802134',
        port:'3306',
        database:'nodejs'
    },
    //执行sql
    setSql:function (sql,arr,fn) {
        //获取连接
        let conn = mysql.createConnection(this.mysqlConfig);
        //建立连接
        conn.connect();
        //执行sql语句
        conn.query(sql,arr,fn);
        //关闭连接
        conn.end();
    }
};
//将本模块导出，对外开放
module.exports=executeSql;