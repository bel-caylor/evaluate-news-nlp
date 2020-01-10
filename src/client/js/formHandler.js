// const submitCode = (event) => {
//   alert('I work!')
// };


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checkForName(formText)


    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {

        //Add Locations
        const locations = res.entities.location
        let locationHTML = ""
        locations.forEach((location) => {
          locationHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + location + "\">" + location + "</a></div>"
        })
        document.getElementById('locations').insertAdjacentHTML('beforeend', locationHTML)

        //Add Keywords
        const keywords = res.entities.keyword
        let keywordHTML = ""
        keywords.forEach((keyword) => {
          keywordHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + keyword + "\">" + keyword + "</a></div>"
        })
        document.getElementById('keywords').insertAdjacentHTML('beforeend', keywordHTML)

        //Add Organizations
        const organizations = res.entities.organization
        let organizationHTML = ""
        organizations.forEach((organization) => {
          organizationHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + organization + "\">" + organization + "</a></div>"
        })
        document.getElementById('organizations').insertAdjacentHTML('beforeend', organizationHTML)

        //Add People
        const people = res.entities.person
        let peopleHTML = ""
        people.forEach((person) => {
            peopleHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + person + "\">" + person + "</a></div>"
        })
        document.getElementById('people').insertAdjacentHTML('beforeend', peopleHTML)

    })
}

export { handleSubmit }
