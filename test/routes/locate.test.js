'use strict';

const locateMock = require('../routes/lib/locate-mock.js');

describe('LOCATE module', () => {
  test('should return an object with city and state properties', () => {
    locateMock('pass')
      .then(location => {
        expect(location.city).toBe('winterfell');
        expect(location.state).toBe('westeros');
      });
  });
  test('should return an error if something goes wrong', () => {
    locateMock('fail')
      .then(location => {
        expect(location).toBe('ERROR');
      });
  });
});