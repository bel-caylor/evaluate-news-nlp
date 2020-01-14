const updateUI = async () => {
  console.log('UpdateUI started')
    const request = await fetch('http://localhost:8080/getData');
    console.log(request);

    try{
      const allData = await request.json();
      console.log(allData);
      console.log('Data converted')
      updateHTML(allData);
    }catch(error){
      console.log("error", error);
    }
};



    //Add Locations
const updateHTML = (allData) => {
    const locations = allData.entities.location
    let locationHTML = ""
    locations.forEach((location) => {
      locationHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + location + "\">" + location + "</a></div>"
    })
    document.getElementById('locations').insertAdjacentHTML('beforeend', locationHTML)

    //Add Keywords
    const keywords = allData.entities.keyword
    let keywordHTML = ""
    keywords.forEach((keyword) => {
      keywordHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + keyword + "\">" + keyword + "</a></div>"
    })
    document.getElementById('keywords').insertAdjacentHTML('beforeend', keywordHTML)

    //Add Organizations
    const organizations = allData.entities.organization
    let organizationHTML = ""
    organizations.forEach((organization) => {
      organizationHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + organization + "\">" + organization + "</a></div>"
    })
    document.getElementById('organizations').insertAdjacentHTML('beforeend', organizationHTML)

    //Add People
    const people = allData.entities.person
    let peopleHTML = ""
    people.forEach((person) => {
        peopleHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + person + "\">" + person + "</a></div>"
    })
    document.getElementById('people').insertAdjacentHTML('beforeend', peopleHTML)
};

module.exports = updateUI
