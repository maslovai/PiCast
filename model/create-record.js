'use strict';

require('dotenv').config();
const Record = require('./record.js');
const superagent = require('superagent');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = (location) => {
  
  mongoose.connect(process.env.MLAB, {useMongoClient: true});

  let city = location.city || 'San_Francisco';
  let state = location.state || 'CA';

  superagent.get(`http://api.wunderground.com/api/${process.env.API_KEY}/conditions/q/${state}/${city}.json`)
    .then(data => {
      let cityData = {};
      cityData.city = data.body.current_observation.display_location.city;
      cityData.state = data.body.current_observation.display_location.state;
      cityData.temperature = data.body.current_observation.temp_f;
      cityData.forecast = data.body.current_observation.icon;
      return superagent.get(`http://api.wunderground.com/api/${process.env.API_KEY}/alerts/q/${state}/${city}.json`)
        .then(data => {
          cityData.alert = data.body.alerts[0].type;
          return cityData;
        });
    })
    .then((cityRecord) => {
      console.log(cityRecord);
      mongoose.disconnect();
    })
    .catch(err => {
      console.log('ERROR', err.message, '- derped getting forecast');
      mongoose.disconnect();
    });

  // let record = new Record({
  //   'city': req.body.current_observation.display_location.full, 
  //   'temperature': req.body.current_observation.temp_f, 
  //   'forecast': req.body.current_observation.icon});
    
  // return record.save()
  //   .then(record => {
  //     console.log(record);
  //     mongoose.disconnect();
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //     mongoose.disconnect();
  //   });
};