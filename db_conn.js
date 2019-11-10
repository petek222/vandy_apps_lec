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

con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
});


  
  
// var query = con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     let sql = "SELECT * FROM sys.profdata"; // Query works! Write whatever we want in this processing section

//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         return result;
//       });
//   });

  module.exports.con = con;

// Maybe try to use express her for talking between services rather than doing it raw





// This grabs department of specific professor
// console.log(result[0]['prof_dept']);
// let sql = "SELECT * FROM sys.profdata where prof_name = 1101"; // Query works! Write whatever we want in this processing section
