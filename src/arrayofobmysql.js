var mysql= require('mysql');
var con= mysql.createConnection({

host:"localhost",
user:"root",
password:"password1",
database:"mydb"



});

con.connect(function(err){
    if(err)throw err;
    console.log("hi");
    var sql="insert into customers (name,address) values ?";
    var values=[
    ['john11','highway 71'],
    ['Peter11', 'Lowstreet 4'],
    ['Amy11', 'Apple st 652'],
    ['Hannah11', 'Mountain 21'],
    ['Michae1l1', 'Valley 345']
    // ['Sandy1', 'Ocean blvd 2'],
    // ['Betty1', 'Green Grass 1'],
    // ['Richard1', 'Sky st 331'],
    // ['Susan11', 'One way 98'],
    // ['Vicky1', 'Yellow Garden 2'],
    // ['Ben1', 'Park Lane 38'],
    // ['William1', 'Central st 954'],
    // ['Chuck1', 'Main Road 989'],
    // ['Viola1', 'Sideway 1633']
    ];
    
    
    // con.on('error', function(err,result) {
    //     console.log("[mysql error]",err);
    //     console.log("number of records inserted"+ result.affectedRows)
    //   });
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });



});