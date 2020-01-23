const updateUI = require('./UpdateUI.js')
const callAylienAPI = require('./callAylienAPI.js')

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
<<<<<<< HEAD

    // console.log(formURL)
    callAylienAPI(formURL)
||||||| merged common ancestors
    let formURL = document.getElementById('formURL').value
    console.log(formURL)
    callAylienAPI(formURL)
=======
>>>>>>> 10609608b39e37aa0f25030f582b5324d2fd6634

    // console.log(formURL)
    let formURL = document.getElementById('formURL').value

    if (testValidURL === true) {
      callAylienAPI('http://localhost:8080/apiData', {"URL":formURL})
        .then(updateUI())
    }else {
      alert('Please enter a valid URL')
    }
    // setTimeout(updateUI,10000)
      // .then()
}

function testValidURL(formURL) {
    let pattern = /http(s):/;
    return pattern.test(formURL);
};

export { handleSubmit }
