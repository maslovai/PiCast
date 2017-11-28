'use strict';

const assert = require('assert');
const sinon = require('sinon');
const forecast = require('../mocks/mockforecast.js');

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

  it('should turn on red light for severe weather and blue for sleet', function() {

    let spy = sinon.spy(console, 'log');
    forecast('sleet');
    assert(spy.calledWith('21: 1'));
    assert(spy.calledWith('18: 1'));
    spy.restore();
  });

  it('should turn on red and blue light', function() {

    let spy = sinon.spy(console, 'log');
    forecast('tstorms');
    assert(spy.calledWith('18: 1'));
    assert(spy.calledWith('21: 1'));
    spy.restore();

  });
});

describe('weather alerts', function() {

  it('should log 21 OFF if count is 0', function(){

    let spy = sinon.spy(console, 'log');
    forecast('snow', 'WIN');
    assert(spy.calledWith('21: off'));
    assert(spy.calledWith('blinking'));
    spy.restore();

  });

  it('should turn on blue alert', function(){

    let spy = sinon.spy(console, 'log');
    forecast('sleet', 'FLO');
    assert(spy.calledWith('21: off'));
    assert(spy.calledWith('18: 1'));
    assert(spy.calledWith('blinking stopped'));
    assert(spy.calledWith('0 = 0'));
    spy.restore();

  });

  it('should turn on yellow alert', function(){

    let spy = sinon.spy(console, 'log');
    forecast('sunny', 'HEA');
    assert(spy.calledWith('21: off'));
    assert(spy.calledWith('24: 1'));
    assert(spy.calledWith('blinking stopped'));
    assert(spy.calledWith('0 = 0'));
    spy.restore();

  });
});
