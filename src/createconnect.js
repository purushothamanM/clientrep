var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"username",
    password :"password",
    database:"datetask"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("CREATE DATABASE porous",function(err,result){
        if(err) throw err;
        console.log("database created")
    })
})

// var mysql= require("mysql")
// let con=mysql.createConnection({
//     host:"localhost",
//     user :"username",
//     password:"password"
// });
// con.connect(function(err,result){
//     if(err)throw err,
//     console.log("connected")
//     var sql="CREATE TABLE customers (id int auto increment primary key,name VARCHAR(255), address VARCHAR(255)),INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log("table created")
//     });
// });