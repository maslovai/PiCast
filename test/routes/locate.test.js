'use strict';

const locateMock = require('../routes/lib/locate-mock.js');

describe('LOCATE module', () => {
  test('should return an object with city and state properties', () => {
    return locateMock('pass')
      .then(location => {
        expect(location.city).toEqual('winterfell');
        expect(location.state).toEqual('westeros');
      });
  });
  test('should return ERROR if something goes wrong', () => {
    return locateMock('fail')
      .catch(err => {
        expect(err).toEqual('ERROR');
      });
  });
});