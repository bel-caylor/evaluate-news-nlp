const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const sampleAPIResp = require('./sampleAPI.js')
let aylienData = [];

//Setup Aylient API
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
<<<<<<< HEAD
    console.log(`Your API key is ${process.env.API_KEY}`);
    getAPIData()
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
||||||| merged common ancestors
=======
    console.log(`Your API key is ${process.env.API_KEY}`);
    // getAPIData()
>>>>>>> 10609608b39e37aa0f25030f582b5324d2fd6634
})

<<<<<<< HEAD

// const getAylienAPI =
async function getAylienAPI(req, res) {
  console.log(req.body)
  const testURL = 'https://en.wikipedia.org/wiki/Belinda_Carlisle';
  textapi.entities({'url': testURL},
  function(error, response) {
    if (error === null) {
    console.log(response);
  }else{
    console.log("error:",  error);
    console.log(textapi);
  }
  })
};

app.get('/apiData', getAylienAPI(req, res))




app.get('/test', function (req, res) {
    res.send(sampleAPIResp)
||||||| merged common ancestors
app.get('/test', function (req, res) {
    res.send(sampleAPIResp)
=======
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
>>>>>>> 10609608b39e37aa0f25030f582b5324d2fd6634
})

const getAylienAPI = async (req, res) => {
  // console.log(req.body.URL);
  // aylienData = [];
  // console.log('Post Received!');
  // const formURL = req.body.URL;
  // const testURL = 'https://en.wikipedia.org/wiki/Belinda_Carlisle';
  const getData = await textapi.entities(req.body.URL,
    function(error, response) {
    if (error === null) {
    // aylienData = response.entities;
    // console.log(aylienData);
    let newData = response.entities;
    let newEntry = {
      loc: newData.location,
      keyW: newData.keyword,
      org: newData.organization,
      pers: newData.person
      };
    aylienData.push(newEntry);
    console.log('Data End of Post:', aylienData);

    }else{
    console.log("error:",  error);
    console.log(textapi);
  }
  })
};

app.post('/apiData', getAylienAPI);

// app.get('/getData', function (req, res) {
//     console.log('Data Begin of Get:', aylienData);
//     res.send(aylienData);
//     console.log('Data sent')
// });

// app.get('/getData', setTimeout(function (req, res) {
//     console.log('Data Begin of Get:', aylienData);
//     res.send(aylienData);
//     console.log('Data sent')
// }, 3000));

app.get('/getData', function (req, res) {
    console.log('Data Begin of Get:', aylienData);
    setTimeout(function() {res.send(aylienData);}, 3000)
    console.log('Data sent')
    aylienData = [];
});

// const getAylienAPI = new Promise(function(resolve, reject) {
//   const aylienData = [];
//   AylienAPI
//   if (aylienData !== []) {
//     resolve("Data retreived.");
//   }else {
//     reject(Error("No data"));
//   }
// });

// app.post('/apiData', async (req, res) => {
//   // console.log(req.body.URL);
//   console.log('Post Received!');
//   const formURL = req.body.URL;
//   // const testURL = 'https://en.wikipedia.org/wiki/Belinda_Carlisle';
//   textapi.entities(formURL,
//     await function(error, response) {
//     if (error === null) {
//     // aylienData = response.entities;
//     // console.log(aylienData);
//     let newData = response.entities;
//     let newEntry = {
//       loc: newData.location,
//       keyW: newData.keyword,
//       org: newData.organization,
//       pers: newData.person
//       };
//     aylienData.push(newEntry);
//     console.log('Data End of Post:', aylienData);
//
//     }else{
//     console.log("error:",  error);
//     console.log(textapi);
//   }
//   })
// });
