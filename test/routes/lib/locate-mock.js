'use strict';

const mockLocation = {
  city: 'winterfell',
  state: 'westeros',
};

module.exports = (outcome) => {
  return new Promise((resolve, reject) => {
    if(outcome==='pass') resolve(mockLocation);
    reject('ERROR');
  });
};