// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser');



// app.set('view engine', 'ejs')
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.get('/', function (req, res) {
//   // OLD
//   //res.send('Hello World!')

//   // NEW
//   res.render('index');

// })

// app.post('/', function (req, res) {
//     res.render('index');
//     console.log(req.body.city);
//   })  


// //   const request = require('request');
// //   const apiKey = '*****************';
// //   //...
// //   //...
// //   app.post('/', function (req, res) {
// //     let city = req.body.city;
// //     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
// //   request(url, function (err, response, body) {
// //       if(err){
// //         res.render('index', {weather: null, error: 'Error, please try again'});
// //       } else {
// //         let weather = JSON.parse(body)
// //         if(weather.main == undefined){
// //           res.render('index', {weather: null, error: 'Error, please try again'});
// //         } else {
// //           let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
// //           res.render('index', {weather: weatherText, error: null});
// //         }
// //       }
// //     });
// //   })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })



const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {

  console.log('REQ:');
  console.log(req);

  let APIKEY = "b6ba85ee";

  let city = req.body.city;
  console.log('CITY' + city);
  //let APIKEY = "229f3914e379c1c648e55b896cac5b6b";
  //let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${APIKEY}`

  // Make sure to replace "Star Wars" with the correct parameter
  //let url = `http://www.omdbapi.com/?apikey=${APIKEY}&t=Star+Wars`

  let url = `http://www.omdbapi.com/?apikey=${APIKEY}&t=${city}`



  request(url, function (err, response, body) {

    console.log(response);
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let movieData = JSON.parse(body)
      let resultingData = dataParser(movieData);
     // res.send(movieData);
      //res.render('index', movieData);
      // if(weather.main == undefined){
      //   res.render('index', {weather: null, error: 'Error, please try again'});
      // } else {
      //   let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      //   //res.render('index', {weather: weatherText, error: null});
      res.send(resultingData);
      // }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function dataParser(movieData) {

  return("Title: " + movieData["Title"] + "\n" + "Date Released: " + movieData["Released"] + "\n" + "Rated: " + movieData["Rated"] + "\n" + "Runtime: " + movieData["Runtime"] + "\n" + "Genre: " + movieData["Genre"] + "\n" + "Director: " + movieData["Director"] + "\n" + "Writer: " + movieData["Writer"] + "\n" + "Actors: " + movieData["Actors"] + "\n" + "Plot: " + movieData["Plot"] + "\n");
    // <ul>
    //   <li>{"Title: " + movieData["title"]}</li>
    //   <li>{"Date Released: " + movieData["Released"]}</li>
    //   <li>{"Rated: " + movieData["Rated"]}</li>
    //   <li>{"Runtime: " + movieData["Runtime"]}</li>
    //   <li>{"Genre: " + movieData["Genre"]}</li>
    //   <li>{"Director: " + movieData["Director"]}</li>
    //   <li>{"Writer: " + movieData["Writer"]}</li>
    //   <li>{"Actors: " + movieData["Actors"]}</li>
    //   <li>{"Plot: " + movieData["Plot"]}</li>
    // </ul>
}
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

