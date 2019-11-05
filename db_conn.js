var mysql = require('mysql');

// Below is the basic code for executing a connection/query on a MySQL database to grab the desired data
// Result of the example select query is returned as a basic JSON object (I think)
//
// Note that we may want to port this into process.js to intertwine the database calls more closely with the processing information
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sinc40245"
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "SELECT * FROM sys.profdata";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
      });
  });

