const updateUI = require('./UpdateUI.js')
const callAylienAPI = require('./callAylienAPI.js')

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field

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
