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
    console.log(`Your API key is ${process.env.API_KEY}`);
    // getAPIData()
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


app.post('/apiData', getAylienAPI);

app.get('/getData', function (req, res) {
    console.log(aylienData);
    res.send(aylienData);
    console.log('Data sent')
});

// const getAylienAPI =
function getAylienAPI(req, res) {
  // console.log(req.body.URL);
  console.log('Post Received!');
  const formURL = req.body.URL;
  const testURL = 'https://en.wikipedia.org/wiki/Belinda_Carlisle';
  textapi.entities(formURL,
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
    console.log(aylienData);

    }else{
    console.log("error:",  error);
    console.log(textapi);
  }
  })
};
