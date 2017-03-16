var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return(
//       <h3>About component</h3>
//     )
//   }
// });

// this is the same as above
// it doesnt maintain a state and only renders so we use arrow

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather app built with React</p>
      <p>
        These are the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> -This was the Javascript Framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> -Access weather data by city name
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
