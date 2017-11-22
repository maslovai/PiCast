'use strict';

require('dotenv').config();
const superagent = require('superagent');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = (location) => {
  return new Promise((resolve,reject) => {

    // let city = 'Kingston';
    // let state =  'WA';
    let city = location.city || 'San_Francisco';
    let state = location.state || 'CA';
    console.log('Getting forecast for: ', city,state);
    
    superagent.get(`http://api.wunderground.com/api/${process.env.API_KEY}/conditions/q/${state}/${city}.json`)  
      .then(data => {
        let cityData = {};
        cityData.city = data.body.current_observation.display_location.city;
        cityData.state = data.body.current_observation.display_location.state;
        cityData.temperature = data.body.current_observation.temp_f;
        cityData.forecast = data.body.current_observation.icon;
        return superagent.get(`http://api.wunderground.com/api/${process.env.API_KEY}/alerts/q/${state}/${city}.json`)
          .then(data => {
            try {
              cityData.alert = data.body.alerts[0].type;
            } catch(err) {
              cityData.alert = 'none';
            }
            return cityData;
          })
          .then((cityRecord) => resolve(cityRecord))
          .catch(err => reject('ERROR', err.message, '- derped getting forecast'));
      });
  });
};