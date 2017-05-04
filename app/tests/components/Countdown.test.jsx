var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  // we include done as param so test dont fail with mocha
  // test will stop when we call done. bc we run an async command
  describe('handleSetCountdown', (done) => {
    it('should set state to start and countdown',() => {
      // render countdown component
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      // call handleSetCountdown
      countdown.handleSetCountdown(10);

      // we expect these things when passing in 10sec to handleSetCountdown
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      // test if count is updated after a second
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });

    it('should not set count less than zero',() => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      // after 3 sec, expect count doesnt go below 0, therefore its still 0
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001)
    });
  });
});
