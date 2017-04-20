var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
// for {props.children}
// app- app.jsx everyhting between open-close route main path is its children
// this lets us render those components to the page
// specify where to put this components children
