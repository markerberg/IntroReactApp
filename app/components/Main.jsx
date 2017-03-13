var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function () {
//     return(
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return(
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
};

module.exports = Main;
// for {props.children}
// app- app.jsx everyhting between open-close route main path is its children
// specify where to put this components children- under h2 tag
