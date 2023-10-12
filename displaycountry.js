const axios = require('axios'); // If you are using Node.js

axios.get('https://restcountries.com/v3.1/all')
  .then(response => {
    const countries = response.data;
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log('---');
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
