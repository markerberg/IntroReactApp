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
    <h3>About component</h3>
  )
};

module.exports = About;
