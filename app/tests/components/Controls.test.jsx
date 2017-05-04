var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      // render controls component
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      // var to let us assert output thats rendered to screen
      var $el = $(ReactDOM.findDOMNode(controls));
      // select pause button to see if exist
      // jQuery filter :contains checks button class with text value of Pause
      var $pauseButton = $el.find('button:contains(Pause)');
      // there should be one button on the page
      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');
      expect($pauseButton.length).toBe(1);
    });
  });
});
