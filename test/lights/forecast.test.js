'use strict';

const assert = require('assert');
const sinon = require('sinon');
const forecast = require('../lib/mocks/mockforecast.js');

describe('solid lights', function() {

  it('should turn the blue light on if raining', function() {

    let spy = sinon.spy(console, 'log');
    forecast('rain');
    assert(spy.calledWith('18: 1'));
    assert(spy.calledWith('blinking stopped'));
    assert(spy.calledWith('0 = 0'));
    spy.restore();
  });

  it('should turn off white light', function(){

    let spy = sinon.spy(console, 'log');
    forecast('cloudy');
    assert(spy.calledWith('23: 1'));
    assert(spy.calledWith('blinking stopped'));
    assert(spy.calledWith('0 = 0'));
    spy.restore();

  });
});

describe('blinking lights', function() {

  it('should blink the light if only some sun is forecasted', function() {

    let spy = sinon.spy(console, 'log');
    forecast('partlysunny');
    assert(spy.calledWith('24: 1'));
    assert(spy.calledWith('blinking'));
    spy.restore();
  });

  it('should turn off yellow if only sun is in forecast', function(){

    let spy = sinon.spy(console, 'log');
    forecast('sunny');
    assert(spy.calledWith('24: 1'));
    assert(spy.calledWith('blinking stopped'));
    assert(spy.calledWith('0 = 0'));
    spy.restore();

  });

});

describe('severe weather warning', function() {

  it('should turn on red light for severe weather and white for snow', function() {

    let spy = sinon.spy(console, 'log');
    forecast('sleet');
    assert(spy.calledWith('21: 1'));
    assert(spy.calledWith('23: 1'));
    assert(spy.calledWith('blinking stopped'));
    assert(spy.calledWith('1 = 0'));
    assert(spy.calledWith('0 = 0'));
    spy.restore();
  });

});
