var React = require('react');
var ReactDOM = require('react-dom');
// same as var Route=req('react-router').Route and etc for all others
// this is called destructuring syntax in es6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
// we need to inject into html so styles show up, we use style!
// use css! loader bc require doesnt know how to load in css file
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
