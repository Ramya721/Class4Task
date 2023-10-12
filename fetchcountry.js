const axios = require('axios'); // If you are using Node.js

axios.get('https://restcountries.com/v3.1/all')
  .then(response => {
    const countries = response.data;
    countries.forEach(country => {
      console.log(`Flag for ${country.name.common}: ${country.flags.png}`);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
