'use strict';

const getWeather = require('../../routes/get-weather.js');
const locateMock = require('./lib/locate-mock.js');
const mockRecord = require('./lib/mockRecord.js');

describe('getWeather function', () => {
  // getLocation tests
  test('should return a city on getLocation module success', () => {
    return locateMock('good')
      .then(location => expect(location).toBe('Maui'));
  });
  test('should return ERROR if on getLocation module failure', () => {
    return locateMock('bad')
      .catch(error => expect(error).toBe('ERROR'));
  });

  // saveRecord tests
  test('should return mongoose record object on success', () => {
    return mockRecord('good')
      .then(record => {
        expect(record.city).toBe('Maui');
        expect(record.temperature).toBe('69');
        expect(record.forecast).toBe('Sunny');
      });
  });
  test('should return error if something goes wrong', () => {
    return mockRecord('bad')
      .catch(error => expect(error).toBe('ERROR'));
  });
});

// make mock of save record -> then test resolve/reject o each 