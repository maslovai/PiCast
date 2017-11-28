'use strict';

module.exports = (outcome) => {
  return new Promise((resolve,reject) => {
    if(outcome === 'pass'){
      resolve({
        city: 'Maui',
        temperature: '69',
        forecast: 'Sunny',
      });
    }
    reject('ERROR');
  });
};