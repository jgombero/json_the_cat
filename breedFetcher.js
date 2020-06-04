const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  console.log(response);
  if (error) {
    console.log('Error: ', error);
  } else {
    const data = JSON.parse(body);
    console.log(data);
    if (data.length === 0) {
      console.log("Invalid breed name. Try again");
    } else {
      console.log(data[0].description);
    }
  }
});