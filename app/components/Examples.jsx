var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//     return(
//       <h3>Examples component</h3>
//     )
//   }
// });

var Examples = (props) => {
  // we link to homepage with ?query param
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations</p>
      <ol>
        <li>
          <Link to='/?location=New York'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
