const updateUI = require('./UpdateUI.js')
const callAylienAPI = require('./callAylienAPI.js')

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field

    // console.log(formURL)
    let formURL = document.getElementById('formURL').value
    callAylienAPI('http://localhost:8080/apiData', {"URL":formURL})
      .then(updateUI())
      // .then()
}

export { handleSubmit }
