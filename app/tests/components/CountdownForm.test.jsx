var expect = require('expect');// to make assertions
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');// render componenets live
var $ = require('jQuery');// to manipulate DOM

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds', () => {
    var spy = expect.createSpy();
    // pass down our component to render with a prop of spy(github mjackson spy)
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    // fetch dom node for given component
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // this is where we pass something into the input field to test
    countdownForm.refs.seconds.value = '109';
    //simulate a submit
    // find nested children of form tag, and access first element
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109b';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
