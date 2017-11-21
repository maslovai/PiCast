'use strict';

module.exports = (outcome) => {
  return new Promise((resolve, reject) => {
    if(outcome==='good') resolve('Maui');
    reject('ERROR');
  });
};