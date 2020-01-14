const callAylienAPI = async () => {
  let formURL = document.getElementById('formURL').value
  let body = {URL: formURL};
  const response = await fetch('/apiData', {
    method: 'GET',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(body),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch(error) {
    console.log("error", error);
  }
};


  // textapi.entities({'url': URL},
  //   function(error, response) {
  //     if (error === null) {
  //     console.log(response);
  //   }else{
  //     console.log("error:",  error);
  //   }
  // });

module.exports = callAylienAPI
