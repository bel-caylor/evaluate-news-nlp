const updateUI = require('./UpdateUI.js')


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checkForName(formText)


    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(res => updateUI(res))
}

export { handleSubmit }
