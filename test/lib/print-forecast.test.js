'use strict';

const printForecast = require('../../lib/print-forecast');

const mockRecord = {
  city: 'Winterfell',
  state: 'Westeros', 
  temp: '69',
  forecast: 'snow',
  alertDescription: 'blizzard',
};

describe('printForecast', () => {
  test('displays forecast in separate lines', () => {
    printForecast(mockRecord);
  });
});