'use strict';

require('dotenv').config();
const Record = require('./record.js');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = (req) => {
  mongoose.connect(process.env.MLAB, {useMongoClient: true});
  
  let record = new Record({
    'city': req.body.current_observation.display_location.full, 
    'temperature': req.body.current_observation.temp_f, 
    'forecast': req.body.current_observation.icon});
    
  return record.save()
    .then(record => {
      console.log(record);
      mongoose.disconnect();
    })
    .catch(err => {
      console.log(err.message);
      mongoose.disconnect();
    });
};