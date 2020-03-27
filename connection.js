const mysql=require("mysql");

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product',
    multipleStatements:true
});
mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected To Db");
    }
    else{
        console.log("Not connected");
    }
})

module.exports=mysqlConnection;