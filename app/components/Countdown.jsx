var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  // lifecycle that gets called after state or prop get updated
  componentDidUpdate: function (prevProps, prevState) {
    // check if new countdownStatus in handleSetCountdown is differnet from initial state
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        // no break here, if we stop, reset count and clear timer
        // only clean timer, but leave the count to original place
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  // componentWillUpdate: function (nextProps, nextState) {
  //    fire before there is update to prop or state
  // },
  // componentDidMount: function () {
  //   fire after everything gets rendered to screen
  // },
  // componentWillMount: function () {
  //   fire before component first gets loaded
  // },
  componentWillUnmount: function () {
    // fire before component removed from DOM
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => { // run func every second
      var newCount = this.state.count - 1;
      this.setState({ // decrement timer by 1 second
        // ternary operator
        // if newCount>=0 true use newCount value, else false we use 0
        count: newCount >= 0 ? newCount : 0
      });
      // if countdown complete, no reason to continue interval
      if(newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus:newStatus});
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return (
      <div>
        <h6 className="page-title">Countdown clock</h6>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
