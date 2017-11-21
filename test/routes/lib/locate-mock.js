'use strict';

module.exports = (outcome) => {
  return new Promise((resolve, reject) => {
    if(outcome==='good') return resolve('Maui');
    return reject('ERROR');
  });
};