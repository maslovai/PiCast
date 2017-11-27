'use strict';

const getWeatherMock = require('../routes/lib/get-weather-mock');

describe('getWeather', () => {
  test('should return a mock city weather object', () => {
    return getWeatherMock('pass')
      .then(record => {
        expect(record.city).toEqual('Maui');
        expect(record.temperature).toEqual('69');
        expect(record.forecast).toEqual('Sunny');
      });
  });
  test('should return ERROR if something goes wrong', () => {
    return getWeatherMock('fail')
      .catch(err => {
        expect(err).toEqual('ERROR');
      });
  });

});