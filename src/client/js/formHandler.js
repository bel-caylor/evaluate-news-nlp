const updateUI = require('./UpdateUI.js')
const callAylienAPI = require('./callAylienAPI.js')

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field

    // console.log(formURL)
    callAylienAPI(formURL)


    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(res => updateUI(res))
}

export { handleSubmit }
