const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const process = require('./process');
const db = require('./db_conn');
var router = express.Router();

const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {

  let className = req.body.class; // This grabs whatever was put in the search box

  console.log("LOOK!")
  console.log(className);

  let databaseInformation = db();

  console.log("YAA");
  console.log(databaseInformation);

  let result = process.professorData(className);


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


