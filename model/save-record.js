'use strict';

require('dotenv').config();
const Record = require('./record.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = (cityRecord) => {
  mongoose.connect(process.env.MLAB, {useMongoClient: true});
  
  let record = new Record({
    'city': cityRecord.city,
    'state': cityRecord.state,
    'temperature': cityRecord.temperature,
    'forecast': cityRecord.forecast,
    'weatherAlert': cityRecord.alert,
  });

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