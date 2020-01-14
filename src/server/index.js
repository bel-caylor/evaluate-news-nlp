const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const sampleAPIResp = require('./sampleAPI.js')

//Setup Aylient API
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express()

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
    console.log(`Your API key is ${process.env.API_KEY}`);
    getAPIData()
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


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
})
