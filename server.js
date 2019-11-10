const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const process = require('./process');
const con = require('./db_conn');
var router = express.Router();
var mysql = require('mysql');

const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})


// This is finally working with the databse as desired
app.post('/', async function (req, res) {

  let className = req.body.class; // This grabs whatever was put in the search box
  let databaseInformation;

  console.log("LOOK!")
  console.log(className);

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

  // Inside thia query function we can do the bulk of our data processing
  await con.query('SELECT * FROM sys.profdata', (err,rows) => {
    if(err) throw err;
    databaseInformation = rows; 
  
    console.log('Data received from Db:\n');
    console.log(rows);

    // Fill in with row manipulation, call to sorting algorithm/RMP-API, etc. 


  });
})

async function processQuery(query) {
  return query(query);
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


function dataParser(movieData) {
    // Fill this in to parse the data we grab and process into a neat way
    // Maybe do a list that ranks the best to worst options for the given class
    //
    // Tab each professor so you can click on them for more statistical information
}


