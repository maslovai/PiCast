'use strict';

require('dotenv').config();
const superagent = require('superagent');

module.exports = () => {
  let city;
  superagent
    .get(`http://api.wunderground.com/api/${process.env.API_KEY}/geolookup/q/autoip.json`)
    .end((err, data) => {
      if(err) {
        console.log(err.message);
        console.log('error making geolookup request');
      }
      console.log(data.body.location.city);
      city = data.body.location.city;
    });
  return city;
};

