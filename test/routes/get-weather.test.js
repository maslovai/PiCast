'use strict';

const superagent = require('superagent');
const getWeather = require('../../routes/get-weather.js');
const locateMock = require('./lib/locate-mock.js');

describe('getWeather function', () => {
  test('should return a city on getLocation module success', () => {
    return locateMock('good')
      .then(location => expect(location).toBe('Maui'));
  });
  test('should return ERROR if on getLocation module failure', () => {
    return locateMock('derp')
      .catch(error => expect(error).toBe('ERROR'));
  });
});

// make mock of save record -> then test resolve/reject o each 