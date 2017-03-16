var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//     return(
//       <h3>Its {temp} in {location}</h3>
//     )
//   }
// });

// this is the same way as destructuring from props above
var WeatherMessage = ({temp,location}) => {
  return(
    <h3 className="text-center">Its {temp} in {location}</h3>
  )
};

module.exports = WeatherMessage;
