var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60; // get the remainder from seconds
    // use math.floor to round down decimal
    var minutes = Math.floor(totalSeconds / 60); // get value without any decimals

    // conditional to change 00:1 to 00:01 and 1:00 to 01:00
    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  },
  render: function () {
    var { totalSeconds } = this.props; // es6 destructuring

    return (
      <div className = "clock">
        <span className = "clock-text">
          { this.formatSeconds(totalSeconds) }
        </span>
      </div>
    );
  }
});

module.exports = Clock;
