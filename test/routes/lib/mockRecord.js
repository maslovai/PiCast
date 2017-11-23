'use strict';

let record = {
  city: 'Maui',
  temperature: '69',
  forecast: 'Sunny',
};

module.exports = (outcome) => {
  return new Promise((resolve,reject) => {
    if(outcome === 'good') return resolve(record);
    return reject('ERROR');
  });
};

