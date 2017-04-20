var React = require('react');
var ReactDOM = require('react-dom');
// same as var Route=req('react-router').Route and etc for all others
// this is called destructuring syntax in es6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
// we need to inject into html so styles show up, we use style!
// use css! loader bc require doesnt know how to load in css file
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// app css
require('style!css!sass!applicationStyles')

// Route path="/" is the component that will always be rendered
// IndexRoute is component that will render if nothing else renders, if the path is just "/"
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <Route path="countdown" component={Countdown} />
      <Route path="timer" component={Timer} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
