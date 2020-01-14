const callAylienAPI = async (url = '', data = {}) => {

  // let body = {"URL": formURL};
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(data),
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
