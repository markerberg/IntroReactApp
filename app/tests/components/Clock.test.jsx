var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

// describe lets us group test and name that group
// create a group of test for Clock component and call group Clock
describe('Clock', () => {
  // every group of test begins with it, takes args(name of func, function with assertions)
  it('should exist', () => {
    // pass in clock var in expect, check if exists
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock)); // convert component into html that rendered to browser
      var actualText = $el.find('.clock-text').text();// give us the text under .clock-text

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    // we must render component to access methods on it
    // we need to call formatSeconds, so we use test utils
    it('should format seconds', () => {
      // renderIntoDocument renders and retrun compnent to do stuff with it
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('format seconds less that ten', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
